<?php

namespace App\Http\Controllers\Api;

class BaseResource
{
    protected $model;

    public function __construct($model)
    {
        $this->model = new $model;
    }

    public function getAll(Array $columns = ["*"], Array $params = [], Array $joins = [])
    {
        $query = $this->model->query();

        foreach($params as $key => $value){
            if(!empty($key)){
                $query->where($key,$value);
            } 
        }

        if (!empty($joins)) {
            $query = $query->setJoinsModelNew($query, $joins);
        }

        $dados = $query->get($columns);

        return ['response' => $dados, 'message'=> '', 'status' => 200];
    }

    public function getAllWhere(Array $columns = ["*"], Array $params = [], Array $joins = []){

        $query = $this->model->query();

        foreach($params as $key => $value){
            if(!empty($value)){
                $operator = '=';
                $column_value = $value[1];
                if (count($value) > 2) {
                    $operator = array_get($value, 1, '=');
                    $column_value = $value[2];
                }
                $query->where($value[0], $operator, $column_value);
            }
        }

        if (!empty($joins)) {
            $query = $query->setJoinsModelNew($query, $joins);
        }

        $dados = $query->get($columns);

        return ['response' => $dados, 'message'=> '', 'status' => 200];

    }

    public function getFirst(Array $columns = ["*"], Array $params = [], Array $joins = [])
    {
        $query = $this->model->query();

        foreach($params as $key => $value) {
            if(!empty($key)){
                $query->where($key,$value);
            }
        }

        if (!empty($joins)) {
            $query = $query->setJoinsModelNew($query, $joins);
        }

        $dados = $query->first($columns);

        if (is_null($dados)) {
            return ['response' => $dados, 'message' => '', 'status' => 404];
        }

        return ['response' => $dados, 'message' => '', 'status' => 200];
    }

    public function getLike(Array $columns = ["*"], Array $params = [], Array $joins = [])
    {
        $query = $this->model->query();

        foreach($params as $key => $value){
            if(!empty($key)){
                $query->where($key,'like',"%".$value."%");
            } 
        }

        if (!empty($joins)) {
            $query = $query->setJoinsModelNew($query, $joins);
        }

        $dados = $query->get($columns);

        return ['response' => $dados, 'message'=> '', 'status' => 200];
    }

    public function post(Array $dados)
    {
        try {
            $dados_salvar = $this->model;
            $dados_salvar->fill($dados);
            $dados_salvar->save();
            return ['response' => $dados_salvar , 'message'=>'gravado com sucesso', 'status' => 200];

        }catch(Exception $e){
            return ['response' => $e->getMessage(), 'message'=>'ocorreu um erro ao salvar', 'status' => 400];
        }

    }

    public function update(Array $dados)
    {
        try {

            $dados_banco = $this->model->find(array_get($dados,'id', 0));
            if (is_null($dados_banco)) {
                return ['response' => [], 'message'=> 'não encontrado', 'status' => 404];
            }

            $dados_banco->fill($dados);
            $dados_banco->save(); 

            return ['response' => $dados_banco, 'message' => 'atualizado com sucesso', 'status' => 200];
        } catch (\Exception $e) {
            return ['response' => $e->getMessage(), 'message'=> 'Ocorreu um erro ao atualizar', 'status' => 400];
        }
    }

    public function updateByKey(Array $dados, $key = 'id')
    {
        try {

            $dados_banco = $this->model->where($key, array_get($dados, $key, 0))->first();

            if (is_null($dados_banco)) {
                return ['response' => [], 'message'=> 'não encontrado', 'status' => 404];
            }

            $dados_banco->fill($dados);
            if ($dados_banco->save() === false) {
                return ['response' => 'Ocorreu um erro ao atualizar', 'message'=> 'Ocorreu um erro ao atualizar', 'status' => 400];
            }

            return ['response' => $dados_banco,'message'=> 'atualizado com sucesso', 'status' => 200];
        } catch (\Exception $e) {
            return ['response' => $e->getMessage(), 'message'=> 'Ocorreu um erro ao atualizar', 'status' => 400];
        }
    }

    public function delete($id)
    {
        try {
            $this->model->destroy($id);
            return ['response' => [],'message'=> 'deletado com sucesso com sucesso', 'status' => 200];

        } catch(Exception $e) {
            return ['response' => $e->getMessage() ,'message'=> 'ocorreu um erro ao deletar', 'status' => 400];
        }
    }

    public function desativar(Array $dados){

        try {
            $dados_banco = $this->model->where($key, array_get($dados, $key, 0))->first();

            if (is_null($dados_banco)) {
                return ['response' => [], 'message'=> 'não encontrado', 'status' => 404];
            }

            $dados_banco->fill($dados);
            if ($dados_banco->save() === false) {
                return ['response' => 'Ocorreu um erro ao atualizar', 'message'=> 'Ocorreu um erro ao atualizar', 'status' => 400];
            }

            return ['response' => $dados_banco,'message'=> 'atualizado com sucesso', 'status' => 200];
        } catch (\Exception $e) {
            return ['response' => $e->getMessage(), 'message'=> 'Ocorreu um erro ao atualizar', 'status' => 400];
        }
    }

    public function ativar(Array $dados){

        try {
            $dados_banco = $this->model->where($key, array_get($dados, $key, 0))->first();

            if (is_null($dados_banco)) {
                return ['response' => [], 'message'=> 'não encontrado', 'status' => 404];
            }

            $dados_banco->fill($dados);
            if ($dados_banco->save() === false) {
                return ['response' => 'Ocorreu um erro ao atualizar', 'message'=> 'Ocorreu um erro ao atualizar', 'status' => 400];
            }

            return ['response' => $dados_banco,'message'=> 'atualizado com sucesso', 'status' => 200];
        } catch (\Exception $e) {
            return ['response' => $e->getMessage(), 'message'=> 'Ocorreu um erro ao atualizar', 'status' => 400];
        }

    }

}
