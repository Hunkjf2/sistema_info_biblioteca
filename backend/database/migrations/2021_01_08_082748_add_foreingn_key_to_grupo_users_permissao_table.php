<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeingnKeyToGrupoUsersPermissaoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('grupo_users_permissao', function (Blueprint $table) {
            $table->foreign('grupo_usuario_id', 'fk_1_grupo_users_permissao')->references('id')->on('grupo_users')->onUpdate('CASCADE')->onDelete('CASCADE');
            $table->foreign('permissao_id', 'fk_2_grupo_users_permissao')->references('id')->on('permissao')->onUpdate('CASCADE')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('grupo_users_permissao', function (Blueprint $table) {
            $table->dropForeign('fk_1_grupo_users_permissao');
            $table->dropForeign('fk_2_grupo_users_permissao');
        });
    }
}
