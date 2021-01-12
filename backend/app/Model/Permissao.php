<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Permissao extends Model { 

    protected $fillable = [
    'nome','roles','grupo'];
    protected $guarded = ['id'];
    protected $table = 'permissao';
    public $timestamps = false;

    public function grupos_per(){
        return $this->belongsToMany('App\Model\GrupoUsuario','grupo_users_permissao');
    }
    
}




?>