<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseResource;
use App\Http\Controllers\Controller;
use App\Model\Autor;

class AutorController extends Controller
{

    public function index(){

        return Autor::all();
        
    }

    public function show($id){

       return Autor::find($id);

    }

    public function update(Request $request){

        $dados = $request->all();
        $autor = Autor::find($dados['id']);
        $autor->fill($dados);
        $autor->save();
        return response()->json(['response'=>'Atualizado com sucesso'], 200);

    }

    public function store(Request $request){
        $dados = $request->all();
        (new Autor)->fill($dados)->save();
        return response()->json(['response'=>'Cadastrado com sucesso'], 200);

    }

    public function destroy($id){

        $autor = Autor::withCount('livros')->find($id);
        
        if ($autor->livros_count > 0) {
            $msgLivro = "Não é possível deletar o Autor! Deve está relacionada a um Livro verifique por favor.";
            return response()->json(['response'=>$msgLivro], 400);
        }

        $autor->delete();
        return response()->json(['response'=>'Deletado com sucesso'], 200);
    }


}

?>