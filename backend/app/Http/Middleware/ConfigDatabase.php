<?php

namespace App\Http\Middleware;

use Closure;
use App\ConfigCliente;
use App\User;
use Config;
use \Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class ConfigDatabase
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {   
        $email = Session::get('email');
        $senha = Session::get('senha');

        $dados = User::where('email',$email)
                 ->where('senha_descript',$senha)->first();
        
        if($dados == 'N'){
            Auth::logout();
            Session::flush();
        }

        return $next($request);
    }
}
