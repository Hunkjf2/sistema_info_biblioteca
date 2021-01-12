<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Emprestimo;
use App\Model\Livro;
use Carbon\Carbon;
use Tymon\JWTAuth\JWTAuth;

class EmprestimoController extends Controller
{

     /**
     * @var JWTAuth
     */
    private $jwtAuth;

    public function __construct(JWTAuth $jwtAuth)
    {
        $this->jwtAuth = $jwtAuth;
    }

    public function index(){

        return Emprestimo::with(['usuarios','pedidos','livros'])->get();
        
    }

    public function MyEmprestimo(){
        $user = $this->jwtAuth->authenticate($this->jwtAuth->getToken());
        return Emprestimo::with(['usuarios','pedidos','livros'])
                ->where('id_user',$user->id)
                ->get();
        
    }

    public function devolucao(Request $request){

        $id = $request->get('id');
        $array = [
            'status'=>Emprestimo::ENTREGUE,
            'data_devolucao'=>Carbon::now()
        ];

        $Emprestimo = Emprestimo::find($id);
        $livro = Livro::find($Emprestimo->id_livro);
        $livro->fill(['status'=>Livro::DISPONIVEL]);
        $livro->save();
        $Emprestimo->fill($array);
        $Emprestimo->save();

        return response()->json(['response'=>'Livro devolvido com sucesso'], 200);

    }


}

?>