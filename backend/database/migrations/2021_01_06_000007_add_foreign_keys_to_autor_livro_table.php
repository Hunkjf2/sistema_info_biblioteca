<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddForeignKeysToAutorLivroTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('autor_livro', function(Blueprint $table)
		{
			$table->foreign('livro_id', 'fk_1_livro_autor')->references('id')->on('livro')->onUpdate('CASCADE')->onDelete('CASCADE');
			$table->foreign('autor_id', 'fk_2_livro_autor')->references('id')->on('autor')->onUpdate('CASCADE')->onDelete('CASCADE');
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('autor_livro', function(Blueprint $table)
		{
			$table->dropForeign('fk_1_livro_autor');
			$table->dropForeign('fk_2_livro_autor');
		});
	}

}
