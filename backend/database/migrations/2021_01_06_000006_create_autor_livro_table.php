<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAutorLivroTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('autor_livro', function(Blueprint $table)
		{
			$table->bigInteger('livro_id')->index('fk_1_livro_autor');
			$table->bigInteger('autor_id')->index('fk_2_livro_autor');
			$table->primary(['livro_id','autor_id']);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('autor_livro');
	}

}
