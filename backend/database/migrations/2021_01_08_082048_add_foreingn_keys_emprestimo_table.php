<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeingnKeysEmprestimoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('emprestimo', function (Blueprint $table) {
            $table->foreign('id_user', 'fk_3_users')->references('id')->on('users')->onUpdate('CASCADE')->onDelete('RESTRICT');
            $table->foreign('id_pedido', 'fk_3_pedido')->references('id')->on('pedidos')->onUpdate('CASCADE')->onDelete('RESTRICT');
            $table->foreign('id_livro', 'fk_5_livro')->references('id')->on('livro')->onUpdate('CASCADE')->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('emprestimo', function (Blueprint $table) {
            $table->dropForeign('fk_3_users');
            $table->dropForeign('fk_3_pedido');
            $table->dropForeign('fk_5_livro');
        });
    }
}
