<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\JWTAuth;
use App\Http\Controllers\Api\BaseResource;
use App\Model\Cargo;
use App\Model\Emprestimo;
use App\Model\GrupoUsuario;
use App\User;
use App\Model\HistoricoUsers;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * @var JWTAuth
     */
    private $jwtAuth;

    public function __construct(JWTAuth $jwtAuth)
    {
        $this->jwtAuth = $jwtAuth;
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!$token = $this->jwtAuth->attempt($credentials)) {
            return response()->json(['error' => 'invalid_credentials'], 401);
        }


        $user = $this->jwtAuth->authenticate($token);
        $permissao = GrupoUsuario::select(DB::raw("p.roles"))->leftJoin('users as u','u.id_grupo','grupo_users.id')
                               ->leftJoin('grupo_users_permissao as gp','gp.grupo_usuario_id','grupo_users.id')
                               ->leftJoin('permissao as p','p.id','gp.permissao_id')
                               ->where('u.id',$user->id)
                               ->get();
        $array_permissao = [];
        foreach($permissao as $permissaos){
            $array_permissao[] = $permissaos->roles;
        }

        $user = $this->jwtAuth->authenticate($token);

        return response()->json(compact('token','user','array_permissao'));
    }

    public function refresh()
    {
        $token = $this->jwtAuth->getToken();
        $token = $this->jwtAuth->refresh($token);

        return response()->json(compact('token'));
    }

    public function logout(Request $req)
    {
        $token = $this->jwtAuth->getToken();
        $this->jwtAuth->invalidate($token);
        $req->session()->flush();

        return response()->json(['logout']);
    }

    public function me()
    {
        if (!$user = $this->jwtAuth->parseToken()->authenticate()) {
            return response()->json(['error' => 'user_not_found'], 404);
        }

        return response()->json(compact('user'));
    }

    public function getAll(){
        return User::with(['grupos_usuarios'])->get();
    }

    public function getInfo($id){
        $user = User::where('id',$id)->with(['grupos_usuarios'])->first()->toArray();
        $user['password'] = $user['senha_description'];
        return $user;
    }

    public function store(request $request){

        $dados = $request->all();
        $get_user_two = User::where('email',$dados['email'])->get();
     
        if(count($get_user_two) > 0){
            return ['data'=>'error','mensagem'=>'E-mail já existe'];
        }

        $senha1 = bcrypt($request->get('password'));
        $array = [
                  'id_grupo' => $dados['id_grupo'],
                  'name' => $dados['name'],
                  'password' => $senha1,
                  'remember_token' => $senha1,
                  'email' => $dados['email'],
                  'senha_description' => base64_encode($request->get('password')),
        ]; 

        User::create($array);
        return response()->json(['response' => 'Cadastrado com Sucesso'], 200);
    }

    public function update(request $request, $id){

        $dados = $request->all();
        $array_mensagem = [];
        $camposValidados = [
            'email'  => $dados['email'], 
        ];

        $validator = Validator::make($camposValidados, [
            'email' => [
                Rule::unique('users')->ignore($id),
            ]
        ]);
 
        if($validator->fails()){
            $array_mensagem = array_keys($validator->errors()->getMessages());
        }

        if(count($array_mensagem) > 0){
            return response()->json(['response' => 'E-mail já existe, favor cadastrar um novo e-mail'], 400);
        }

        $senha1 = bcrypt($request->get('password'));
        $array = [
                  'id_grupo' => $dados['id_grupo'],
                  'name' => $dados['name'],
                  'password' => $senha1,
                  'remember_token' => $senha1,
                  'email' => $dados['email'],
                  'senha_description' => base64_encode($request->get('password')),
        ]; 
        $user = User::find($id);
        $user->fill($array);
        $user->save();
        return response()->json(['response' => 'Atualizado com Sucesso'], 200);

    }


    public function destroy($id){
        
        $user = User::withCount(['emprestimos','pedidos'])->find($id);

        if ($user->emprestimos_count > 0) {
            $msgLivro = "Não é possível deletar este Usuário! Deve está relacionada a um empréstimo verifique por favor.";
            return response()->json(['response'=>$msgLivro], 400);
        }

        if ($user->pedidos_count > 0) {
            $msgLivro = "Não é possível deletar este Usuário! Deve está relacionada a um pedido verifique por favor.";
            return response()->json(['response'=>$msgLivro], 400);
        }

        (new BaseResource(User::class))->delete($id);
        return response()->json(['response' => 'Deletado com Sucesso'], 200);
    }


    public function newCont(request $request){

        $dados = $request->all();

        $get_user_two = User::where('email',$dados['email'])->get();
     
        if(count($get_user_two) > 0){
            return response()->json(['response' => 'E-mail já existe, favor cadastrar um novo e-mail'], 400);
        }

        $senha1 = bcrypt($request->get('password'));
        $array = [
                  'id_grupo' => User::CLIENTE,
                  'name' => $dados['name'],
                  'password' => $senha1,
                  'remember_token' => $senha1,
                  'email' => $dados['email'],
                  'senha_description' => base64_encode($request->get('password')),
        ]; 

        User::create($array);

        return response()->json(['response' => 'Cadastrado com sucesso'], 200);
    }



}
