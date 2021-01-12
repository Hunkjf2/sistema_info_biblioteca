<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\GrupoUsuario;
use App\Model\Permissao;

class GrupoUsuarioController extends Controller
{

    public function index(){

        return GrupoUsuario::all();
        
    }

    public function show($id){

        $permissao = Permissao::all();
        $grupo = GrupoUsuario::with('permissao_grupo')->where('id',$id)->first();
        $json = json_decode(json_encode($grupo),TRUE);
        $array = [];
        foreach ($json['permissao_grupo'] as $key) {
            $array[] = ['id'=>$key['id'],'nome'=>$key['nome'],'roles'=>$key['roles'],'grupo'=>$key['grupo']];
        }
        $json['permissao_grupo'] = $array;
        return [$permissao,$json];

    }

    public function update(Request $request){

        $dados = $request->all();
        $permissao = $request->all()['permissaoArray'];
        $grupo = GrupoUsuario::find($dados['id']);
        $grupo->fill($dados);
        $grupo->save();
        $grupo->permissao_grupo()->sync($permissao);
        return response()->json(['response'=>'Atualizado com sucesso'], 200);

    }

    public function store(Request $request){

        $dados = $request->all();
        (new GrupoUsuario)->fill($dados)->save();
        return response()->json(['response'=>'Cadastrado com sucesso'], 200);

    }

    public function permissao(){
        return Permissao::all();
    }

    public function destroy($id){
        
        $grupo = GrupoUsuario::withCount('usuarios')->find($id);

        if($grupo->usuarios_count > 0) {
            $msgGrupo = "Não é possível deletar este Grupo de Usuário! Deve está relacionado a um usuário.";
            return response()->json(['response'=>$msgGrupo], 400);
        }
        
        $grupo->delete();
        return response()->json(['response'=>'Deletado com sucesso'], 200);
    }


}

?>