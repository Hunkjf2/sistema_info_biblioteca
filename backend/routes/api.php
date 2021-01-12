<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// ROTAS PARA DE AUTENTICAÇÃO
Route::post('auth/login', 'Api\AuthController@login');
Route::post('auth/refresh', 'Api\AuthController@refresh');
Route::get('auth/logout', 'Api\AuthController@logout');
Route::post('auth/new_conta', 'Api\AuthController@newCont');

Route::group(['middleware' => 'jwt.auth', 'namespace' => 'Api\\'], function() {

    // ROTAS USUÁRIO
    Route::get('auth/me', 'AuthController@me');
    Route::get('auth/get_user', 'AuthController@getAllUser');
    Route::post('auth', 'AuthController@store');
    Route::get('auth','AuthController@getAll');
    Route::get('auth/{id}','AuthController@getInfo');
    Route::put('auth/{id}', 'AuthController@update');
    Route::delete('auth/{id}','AuthController@destroy');

    
    Route::delete('auth/deletar/{id}', 'AuthController@destroy');
    Route::put('auth/update/{id}', 'AuthController@update');
    Route::get('auth/get_key/{id}','AuthController@GetKey');

    //ROTAS DO AUTOR 
    Route::get('autor','AutorController@index');
    Route::get('autor/{id}','AutorController@show');
    Route::post('autor','AutorController@store');
    Route::put('autor','AutorController@update');
    Route::delete('autor/{id}','AutorController@destroy');


    //ROTAS DO GRUPO DE USUÁRIO 
    Route::get('grupo','GrupoUsuarioController@index');
    Route::get('grupo/{id}','GrupoUsuarioController@show');
    Route::post('grupo','GrupoUsuarioController@store');
    Route::put('grupo','GrupoUsuarioController@update');
    Route::delete('grupo/{id}','GrupoUsuarioController@destroy');
    Route::get('permissao_list','GrupoUsuarioController@permissao');

    //ROTAS DO LIVRO
    Route::get('livro','LivroController@index');
    Route::get('livro/{id}','LivroController@show');
    Route::post('livro','LivroController@store');
    Route::put('livro/{id}','LivroController@update');
    Route::delete('livro/{id}','LivroController@destroy');
    Route::post('livro/pedido','LivroController@newPedido');
    Route::get('livro/detial/{id}','LivroController@getInfo');

    //ROTAS DO PEDIDO
    Route::get('pedido/meus_pedidos','PedidosController@MyPedidos');
    Route::get('pedido','PedidosController@getPedidos');
    Route::put('pedido/{id}','PedidosController@updatePedido');

    //ROTAS DO EMPRESTIMO
    Route::get('emprestimo','EmprestimoController@index');
    Route::get('emprestimo/meus_emprestimo','EmprestimoController@MyEmprestimo');
    Route::post('emprestimo/devolucao','EmprestimoController@devolucao'); 
    
    //PERMISSÃO
    Route::get('grupousuario/listar_permissao','GrupoUsuarioController@GetPermissao');

    //HOME
    Route::get('home/desativar_cliente','HomeController@DesativaCliente');

});
