<?php

use Carbon\Carbon;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class InsertGrupoUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('grupo_users', function (Blueprint $table) {

            $array = [
                1=>[
                  'id' => 1,
                  'descricao' => 'Administrador',
                ],
                2=>[
                  'id' => 2,
                  'descricao' => 'Cliente',
                ]
            ];
            foreach ($array as $value) {
                DB::table('grupo_users')->insert(
                    [
                      'id' => $value['id'],
                      'descricao' => $value['descricao'],
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
        Schema::table('grupo_users', function (Blueprint $table) {

            DB::table('grupo_users')->where('id',1)->delete();
            DB::table('grupo_users')->where('id',2)->delete();

        });
    }
}
