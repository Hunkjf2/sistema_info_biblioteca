<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class GrupoUsuario extends Model { 

    protected $fillable = [
    'descricao','created_at','updated_at'];
    protected $guarded = ['id'];
    protected $table = 'grupo_users';
    public $timestamps = true;
    
    public function usuarios()
    {
    	return $this->hasMany('App\User', 'id_grupo');
    }

    public function permissao_grupo(){
        return $this->belongsToMany('App\Model\Permissao','grupo_users_permissao');
    }

}

?>