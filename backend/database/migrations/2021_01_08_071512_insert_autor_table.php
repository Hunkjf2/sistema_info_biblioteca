<?php

use Carbon\Carbon;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class InsertAutorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('autor', function (Blueprint $table) {

            $array = [
                1=>[
                  'id' => 1,
                  'nome' => 'Patricia xavier',
                ],
                2=>[
                  'id' => 2,
                  'nome' => 'Arnaldo Peres',
                ],
                3=>[
                   'id' => 3,
                   'nome' => 'Nuno Gomes',
                ],
            ];
            foreach ($array as $value) {
                DB::table('autor')->insert(
                    [
                      'id' => $value['id'],
                      'nome' => $value['nome'],
                      'created_at' => Carbon::now(),
                      'updated_at' => Carbon::now()
                    ]
                );
            }
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('autor', function (Blueprint $table) {
            DB::table('autor')->where('id',1)->delete();
            DB::table('autor')->where('id',2)->delete();
            DB::table('autor')->where('id',3)->delete();
        });
    }
}
