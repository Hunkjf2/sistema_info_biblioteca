<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Autor extends Model { 

    protected $fillable = [
    'nome','created_at','updated_at'];
    protected $guarded = ['id'];
    protected $table = 'autor';
    public $timestamps = true;

    public function livros(){
        return $this->belongsToMany(Livro::class);
    }

}


?>