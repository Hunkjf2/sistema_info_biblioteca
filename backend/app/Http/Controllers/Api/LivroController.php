<?php

namespace App\Http\Controllers\Api;

use App\Model\Livro;
use App\Model\Autor;
use App\Model\Emprestimo;
use App\Http\Controllers\Controller;
use App\Model\Pedido;
use App\Reserva;
use Tymon\JWTAuth\JWTAuth;
use Carbon\Carbon;
use DateTime;
use Illuminate\Http\Request;

class LivroController extends Controller
{
     /**
     * @var JWTAuth
     */
    private $jwtAuth;

    public function __construct(JWTAuth $jwtAuth)
    {
        $this->jwtAuth = $jwtAuth;
    }

    public function index()
    {
        $livros = Livro::with(['autores'])->get()->toArray();
        return $livros;
    }

    public function store(Request $request)
    {
        $dados = $request->only('nome','created_at');
        $dados['created_at'] = new Carbon($dados['created_at']);
        $ids = [];
        foreach ($request->get('autores') as $value) {
            $ids[] = $value['id'];
        }
        $new = ['status'=>Livro::DISPONIVEL];
        $dados = array_merge($dados,$new);
        $livro = Livro::create($dados);
        $livro->autores()->attach($ids);
        return response()->json(['response'=>'Cadastrado com sucesso'], 200);
    }

    public function show($id)
    {
       $livro = Livro::with(['autores'])->where('id',$id)->first()->toArray();
       $r = new DateTime($livro['created_at']);
       $livro['created_at'] = $r->format('d/m/Y');
       return $livro;
    }

    public function update(Request $request, $id)
    {
        $dados = $request->only('nome','created_at');
        $dados['created_at'] = new Carbon($dados['created_at']);
        $ids = [];
        foreach ($request->get('autores') as $value) {
            $ids[] = $value['id'];
        }
        $livro = Livro::find($id);
        $livro->fill($dados);
        $livro->save();
        $livro->autores()->sync($ids);

        return response()->json(['response'=>'Atualizado com sucesso.'], 200);
    }

    public function newPedido(Request $request){

        $dados = $request->all();
        $livro = Livro::find($dados['id']);
        $user = $this->jwtAuth->authenticate($this->jwtAuth->getToken());

        if($livro->status == "Indisponível"){
            return response()->json(['response'=>'Livro indisponível para empréstimo.'], 400);
        }
        
        $check = Emprestimo::where('id_user',$user->id)
                ->whereNull('data_devolucao')->get();

        $pedidos = Pedido::where('id_user',$user->id)
                ->where('status',Pedido::PENDENTE)
                ->get();

        if(count($pedidos) >= 5){
            return response()->json(['response'=>'Só é permitido, realizar no máximo 5 pedidos.'], 400);
        }

        if(count($check) >= 5){
            return response()->json(['response'=>'Só é permitido, realizar no máximo 5 empréstimos.'], 400);
        }
        
        Livro::find($dados['id'])->update(['status'=>Livro::INDISPONIVEL]);
        $array = [
            'id_user'=>$user->id,
            'id_livro'=>$dados['id'],
            'status'=>Pedido::PENDENTE
        ];
        (new Pedido)->fill($array)->save();
        return response()->json(['response'=>'Seu pedido de empréstimo será revisado pela administração, e você pode companhar na areá de pedidos'], 200);
        
    }

    public function destroy($id)
    {
        $pedido = Pedido::where('id_livro',$id)
                        ->get();

        $emprestimo = Emprestimo::where('id_livro',$id)
                        ->get();

        if(count($pedido) > 0){
            $msgPedido = "Não é possível deletar este Livro! Deve está relacionada a um pedido, verifique por favor.";
            return response()->json(['response'=>$msgPedido], 400);
        }

        if(count($emprestimo) > 0){
            $msgEmprestimo = "Não é possível deletar este Livro! Deve está relacionada a um empréstimo, verifique por favor.";
            return response()->json(['response'=>$msgEmprestimo], 400);
        }

        Livro::find($id)->delete();
        return response()->json(['response'=>'Deletado com sucesso'], 200);
    }


    public function getInfo(Request $request)
    {

        $id = $request->get('id');
        $livro = Livro::with(['autores'])->find($id);
        return $livro;

    }


}

