<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGrupoUsersPermissaoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grupo_users_permissao', function (Blueprint $table) {
            $table->bigInteger('grupo_usuario_id')->index('fk_1_grupo_users_permissao');
			$table->bigInteger('permissao_id')->index('fk_2_grupo_users_permissao');
			$table->primary(['grupo_usuario_id','permissao_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grupo_users_permissao');
    }
}
