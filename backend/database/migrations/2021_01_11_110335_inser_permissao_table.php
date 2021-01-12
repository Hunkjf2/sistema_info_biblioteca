<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

class InserPermissaoTable extends Migration
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
               'nome' => 'Visualizar Autor',
               'roles' => 'visualizar-autor',
               'grupo' => 'Autor'
            ],
            2=>[
                'id' => 2,
                'nome' => 'Editar Autor',
                'roles' => 'editar-autor',
                'grupo' => 'Autor'
            ],
            3=>[
                'id' => 3,
                'nome' => 'Adicionar Autor',
                'roles' => 'incluir-autor',
                'grupo' => 'Autor'
            ],
            4=>[
                'id' => 4,
                'nome' => 'Excluir Autor',
                'roles' => 'excluir-autor',
                'grupo' => 'Autor'
            ],
            5=>[
                'id' => 5,
                'nome' => 'Visualizar Usuário',
                'roles' => 'visualizar-usuario',
                'grupo' => 'Usuário'
            ],
            6=>[
                 'id' => 6,
                 'nome' => 'Editar Usuário',
                 'roles' => 'editar-usuario',
                 'grupo' => 'Usuário'
            ],
            7=>[
                 'id' => 7,
                 'nome' => 'Adicionar Usuário',
                 'roles' => 'incluir-usuario',
                 'grupo' => 'Usuário'
             ],
            8=>[
                 'id' => 8,
                 'nome' => 'Excluir Usuário',
                 'roles' => 'excluir-usuario',
                 'grupo' => 'Usuário'
            ],
            9=>[
                'id' => 9,
                'nome' => 'Visualizar Grupo de Usuário',
                'roles' => 'visualizar-grupo',
                'grupo' => 'Grupo de Usuário'
            ],
            10=>[
                 'id' => 10,
                 'nome' => 'Editar Grupo de Usuário',
                 'roles' => 'editar-grupo',
                 'grupo' => 'Grupo de Usuário'
            ],
            11=>[
                 'id' => 11,
                 'nome' => 'Adicionar Grupo de Usuário',
                 'roles' => 'incluir-grupo',
                 'grupo' => 'Grupo de Usuário'
             ],
            12=>[
                 'id' => 12,
                 'nome' => 'Excluir Grupo de Usuário',
                 'roles' => 'excluir-grupo',
                 'grupo' => 'Grupo de Usuário'
            ],
            13=>[
                'id' => 13,
                'nome' => 'Visualizar Pedido',
                'roles' => 'visualizar-pedido',
                'grupo' => 'Pedido'
           ],
           14=>[
                'id' => 14,
                'nome' => 'Visualizar Meus Pedidos',
                'roles' => 'visualizar-meu-pedido',
                'grupo' => 'Pedido'
           ],
           15=>[
                'id' => 15,
                'nome' => 'Visualizar Empréstimo',
                'roles' => 'visualizar-emprestimo',
                'grupo' => 'Empréstimo'
           ],
           16=>[
                'id' => 16,
                'nome' => 'Visualizar Meus Empréstimos',
                'roles' => 'visualizar-meu-emprestimo',
                'grupo' => 'Empréstimo'
           ],
           17=>[
                'id' => 17,
                'nome' => 'Visualizar Livro',
                'roles' => 'visualizar-livro',
                'grupo' => 'Livro'
            ],
            18=>[
                'id' => 18,
                'nome' => 'Editar Livro',
                'roles' => 'editar-livro',
                'grupo' => 'Livro'
            ],
            19=>[
                'id' => 19,
                'nome' => 'Adicionar Livro',
                'roles' => 'incluir-livro',
                'grupo' => 'Livro'
            ],
            20=>[
                'id' => 20,
                'nome' => 'Excluir Livro',
                'roles' => 'excluir-livro',
                'grupo' => 'Livro'
            ],
            21=>[
                'id' => 21,
                'nome' => 'Solicitar Emprestimo',
                'roles' => 'solicitar-livro',
                'grupo' => 'Livro'
            ],
            22=>[
                'id' => 22,
                'nome' => 'Detalhes do Livro',
                'roles' => 'detalhe-livro',
                'grupo' => 'Livro'
            ]
        ];
        foreach ($array as $value) {
            DB::table('permissao')->insert(
                [
                  'id' => $value['id'],
                  'nome' => $value['nome'],
                  'roles' => $value['roles'],
                  'grupo' => $value['grupo'],
                ]
            );
        }

        $array_two = [
            1=>[
               'grupo_usuario_id' => 1,
               'permissao_id' => 1,
            ],
            2=>[
               'grupo_usuario_id' => 1,
               'permissao_id' => 2,
            ],
            3=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 3,
            ],
            4=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 4,
            ],
            5=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 5,
            ],
            6=>[
               'grupo_usuario_id' => 1,
               'permissao_id' => 6,
            ],
            7=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 7,
            ],
            8=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 8,
            ],
            9=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 9,
            ],
            10=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 10,
            ],
            11=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 11,
            ],
            12=>[
               'grupo_usuario_id' => 1,
               'permissao_id' => 12,
            ],
            13=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 13,
            ],
            14=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 14,
            ],
            15=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 15,
            ],
            16=>[
               'grupo_usuario_id' => 1,
               'permissao_id' => 16,
            ],
            17=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 17,
            ],
            18=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 18,
            ],
            19=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 19,
            ],
            20=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 20,
            ],
            21=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 21,
            ],
            22=>[
                'grupo_usuario_id' => 1,
                'permissao_id' => 22,
            ],
        ];

        foreach ($array_two as $value) {
            DB::table('grupo_users_permissao')->insert(
                [
                  'grupo_usuario_id' => $value['grupo_usuario_id'],
                  'permissao_id' => $value['permissao_id'],
                ]
            );
        }


        // PERMISSÃO DOS GRUPO DE USUÁRIO CLIENTE

        $array_tree = [ 
            1=>[
                'grupo_usuario_id' => 2,
                'permissao_id' => 14,
           ],
           2=>[
                'grupo_usuario_id' => 2,
                'permissao_id' => 16,
           ],
           3=>[
                'grupo_usuario_id' => 2,
                'permissao_id' => 22,
           ],
           4=>[
                'grupo_usuario_id' => 2,
                'permissao_id' => 21,
           ],
           5=>[
                'grupo_usuario_id' => 2,
                'permissao_id' => 17,
            ],

        ];

        foreach ($array_tree as $value_tree) {
            DB::table('grupo_users_permissao')->insert(
                [
                  'grupo_usuario_id' => $value_tree['grupo_usuario_id'],
                  'permissao_id' => $value_tree['permissao_id'],
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
        DB::table('permissao')->delete();
    }
}
