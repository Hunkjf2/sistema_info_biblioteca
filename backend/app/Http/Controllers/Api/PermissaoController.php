<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Api\BaseResource;
use App\Http\Controllers\Controller;
use Tymon\JWTAuth\JWTAuth;
use App\Model\GrupoUsuario;
use App\User;

class PermissaoController extends Controller
{
    /**
    * @var JWTAuth
    */
   private $jwtAuth;

   public function __construct(JWTAuth $jwtAuth)
   {
       $this->jwtAuth = $jwtAuth;
   }

    public function index(){
    }


}

?>