<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Emprestimo;
use App\Model\Livro;
use App\Model\Pedido;
use Carbon\Carbon;
use Tymon\JWTAuth\JWTAuth;

class PedidosController extends Controller
{
     /**
     * @var JWTAuth
     */
    private $jwtAuth;

    public function __construct(JWTAuth $jwtAuth)
    {
        $this->jwtAuth = $jwtAuth;
    }

    public function MyPedidos(Request $request){

        return Pedido::with(['livros'])->where('id_user',$request->get('id'))->get();
        
    }

    public function getPedidos(){
        return Pedido::with(['usuarios','livros'])->get();
    }

    public function updatePedido(Request $request,$id){

        $dados = $request->all();
        $user = Pedido::find($id);
        $pedido = Pedido::find($id);
        $livro = Livro::find($user->id_livro);

        if(isset($user->status)){

            if($user->status == "Aceito"){

                if($dados['status'] == "Recusado"){
                    $emprestimo = Emprestimo::where('id_pedido',$id)->first();
                    Livro::find($emprestimo->id_livro)
                           ->fill(['status'=>Livro::DISPONIVEL])
                           ->save();
                    $emprestimo->delete();

                    $pedido->fill($dados);
                    $pedido->save();
                   
                    return response()->json(['response'=>'Pedido recusado com sucesso.'], 200);
                }

                if($dados['status'] == "Pendente"){
                    $emprestimo = Emprestimo::where('id_pedido',$id)->first();
                    Livro::find($emprestimo->id_livro)
                           ->fill(['status'=>Livro::INDISPONIVEL])
                           ->save();
                    $emprestimo->delete();

                    $pedido->fill($dados);
                    $pedido->save();
                    return response()->json(['response'=>'Pedido atualizado com sucesso.'], 200);
                }
    
                return response()->json(['response'=>'Este pedido já foi aceito.'], 400);
            }

            if(($user->status == "Recusado") && ($dados['status'] == "Recusado")){
                return response()->json(['response'=>'Este pedido já foi recusado.'], 400);
            }

        }
       

        if($dados['status'] == "Aceito"){
            $array = [
                'id_user'=>$user->id_user,
                'id_pedido'=>$user->id,
                'id_livro'=>$user->id_livro,
                'status'=>Emprestimo::EMPRESTADO,
                'data_emprestimo'=>Carbon::now(),
            ];
    
            (new Emprestimo)
            ->fill($array)
            ->save();

            $livro->fill(['status'=>Livro::INDISPONIVEL]);
            $livro->save();

            $pedido->fill($dados);
            $pedido->save();

            return response()->json(['response'=>'Atualizado com sucesso'], 200);
        }

        if($dados['status'] == "Recusado"){
            
            $livro->fill(['status'=>Livro::DISPONIVEL]);
            $livro->save();

            $pedido->fill($dados);
            $pedido->save();

            $emprestimo = Emprestimo::where('id_pedido',$id)->delete();

            return response()->json(['response'=>'Atualizado com sucesso'], 200);
        }


        if($dados['status'] == "Pendente"){
            $livro->fill(['status'=>Livro::INDISPONIVEL]);
            $livro->save();

            $pedido->fill($dados);
            $pedido->save();
        }

        return response()->json(['response'=>'Atualizado com sucesso'], 200);

    }

}

?>