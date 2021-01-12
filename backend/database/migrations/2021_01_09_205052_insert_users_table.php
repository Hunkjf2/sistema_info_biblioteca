<?php

use Carbon\Carbon;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class InsertUsersTable extends Migration
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
              'id' => 1,
              'id_grupo' => 1,
              'name' => 'Taylor B.Otwell',
              'email' => 'taylor@gmail.com',
              'password'=> '$2y$10$3bbpFY6tL6y/YpOe.wLz2uWELKmoXUP7OZAR9c2pRzaYXK7zNKWLC',
              'remember_token' => '$2y$10$3bbpFY6tL6y/YpOe.wLz2uWELKmoXUP7OZAR9c2pRzaYXK7zNKWLC',
              'senha_description' => 'MTIz'
            ],
            2=>[
               'id'=>2,
               'id_grupo' => 2,
               'name' => 'Larissa Oliveira',
               'email' => 'larissa@gmail.com',
               'password'=> '$2y$10$3bbpFY6tL6y/YpOe.wLz2uWELKmoXUP7OZAR9c2pRzaYXK7zNKWLC',
               'remember_token' => '$2y$10$3bbpFY6tL6y/YpOe.wLz2uWELKmoXUP7OZAR9c2pRzaYXK7zNKWLC',
               'senha_description' => 'MTIz'
            ]
        ];
        foreach ($array as $value) {
            DB::table('users')->insert(
                [
                  'id' => $value['id'],
                  'id_grupo' => $value['id_grupo'],
                  'name' => $value['name'],
                  'email' => $value['email'],
                  'password' => $value['password'],
                  'remember_token' => $value['remember_token'],
                  'senha_description' => $value['senha_description'],
                  'created_at' => Carbon::now(),
                  'updated_at' => Carbon::now()
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
        DB::table('users')->where('id',1)->delete();
        DB::table('users')->where('id',2)->delete();
    }
}
