<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigInteger('id',true);
            $table->bigInteger('id_grupo')->index('fk_1_grupo_users');
            $table->string('name', 300)->nullable();
            $table->string('email', 300)->unique()->nullable();
            $table->string('password', 100)->nullable();
            $table->string('senha_description', 100)->nullable();
            $table->string('foto', 200)->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
