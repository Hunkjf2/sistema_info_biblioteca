<?php

use Carbon\Carbon;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class InsertLivroTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $array = [
            1=>[
               'id' => 1,
               'nome' => 'Alegria do Saber',
               'status' => 'Disponível',
            ],
            2=>[
                'id' => 2,
                'nome' => 'Novo Dia',
                'status' => 'Disponível',
            ]
        ];
        foreach ($array as $value) {
            DB::table('livro')->insert(
                [
                  'id' => $value['id'],
                  'nome' => $value['nome'],
                  'status' => $value['status'],
                  'created_at' => Carbon::now(),
                  'updated_at' => Carbon::now()
                ]
            );
        }

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('livro', function (Blueprint $table) {
            DB::table('livro')->where('id',1)->delete();
            DB::table('livro')->where('id',2)->delete();
        });
    }
}
