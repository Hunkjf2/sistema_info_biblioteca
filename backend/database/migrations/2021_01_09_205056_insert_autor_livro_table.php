<?php

use Carbon\Carbon;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class InsertAutorLivroTable extends Migration
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
               'livro_id' => 1,
               'autor_id' => 1,
            ],
            2=>[
               'livro_id' => 2,
               'autor_id' => 2,
            ]
        ];
        foreach ($array as $value) {
            DB::table('autor_livro')->insert(
                [
                  'livro_id' => $value['livro_id'],
                  'autor_id' => $value['autor_id'],
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
      
    }
}
