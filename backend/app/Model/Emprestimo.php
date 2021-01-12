<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Emprestimo extends Model { 

    protected $fillable = [
    'id_user','id_pedido','id_livro','status','data_emprestimo','data_devolucao'];
    protected $guarded = ['id'];
    protected $table = 'emprestimo';
    public $timestamps = false;

    CONST ENTREGUE = 'Entregue';
    CONST EMPRESTADO = 'Emprestado';

    public function usuarios()
    {
    	return $this->belongsTo('App\User', 'id_user');
    }

    public function pedidos()
    {
    	return $this->belongsTo(Pedido::class, 'id_pedido');
    }

    public function livros()
    {
    	return $this->belongsTo(Livro::class, 'id_livro');
    }


}


?>