<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','LoginController@showLogin');
Route::post('login', ['as' => 'login.entrar', 'uses' => 'LoginController@login']);
Route::get('logout','LoginController@logout');

Route::group(['middleware' => ['config.database','autoriza']], function() {

    Route::get('home','LoginController@index');
    Route::post('valide_user','LoginController@validation');
 
});

