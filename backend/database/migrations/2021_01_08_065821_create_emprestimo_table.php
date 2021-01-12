<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEmprestimoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('emprestimo', function (Blueprint $table) {
            $table->bigInteger('id',true);
            $table->bigInteger('id_user')->index('fk_3_users');
            $table->bigInteger('id_pedido')->index('fk_3_pedido');
            $table->bigInteger('id_livro')->index('fk_5_livro');
            $table->string('status',20)->nullable();;
            $table->string('data_emprestimo',20)->nullable();;
            $table->string('data_devolucao',20)->nullable();;
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('emprestimo');
    }
}
