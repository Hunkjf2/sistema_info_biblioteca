<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model { 

    protected $fillable = [
    'id_user','id_livro','status','created_at','updated_at'];
    protected $guarded = ['id'];
    protected $table = 'pedidos';
    public $timestamps = true;

    CONST ACEITO = 'Aceito';
    CONST PENDENTE = 'Pendente';
    CONST RECUSADO = 'Recusado';

    public function usuarios()
    {
    	return $this->belongsTo('App\User', 'id_user');
    }

    public function livros()
    {
    	return $this->belongsTo(Livro::class, 'id_livro');
    }

}


?>