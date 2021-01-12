<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Livro extends Model
{
    protected $fillable = [
        'nome','status','created_at','updated_at'
    ];
    protected $guarded = ['id'];
    protected $table = 'livro';
    public $timestamps = true;

    CONST DISPONIVEL = 'Disponível';
    CONST INDISPONIVEL = 'Indisponível';

    public function autores(){
        return $this->belongsToMany(Autor::class);
    }

    public function pedidos(){
        return $this->hasMany(Pedido::class, 'id_livro');
    }

    public function emprestimos(){
        return $this->hasMany(Emprestimo::class, 'id_livro');
    }

}
