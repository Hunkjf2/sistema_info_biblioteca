<?php

namespace App;

use App\Model\Cargo;
use App\Model\Cliente;
use App\Model\Emprestimo;
use App\Model\GrupoUsuario;
use App\Model\Setor;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';
    protected $guarded = ['id'];
    protected $fillable = [
        'id_grupo','name','email','senha_description',
        'password','remember_token','created_at','updated_at'
    ];

    protected static $rules = [
        'name' => 'unique:roles',
        'email' => 'unique:roles',
    ];


    CONST CLIENTE = 2;

    public function grupos_usuarios()
    {
    	return $this->belongsTo(GrupoUsuario::class, 'id_grupo');
    }

    public function emprestimos()
    {
    	return $this->hasMany(Emprestimo::class, 'id_user');
    }

    public function pedidos()
    {
    	return $this->hasMany('App\Model\Pedido', 'id_user');
    }

}
