import { Injectable} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Injectable()
export class PermissoesService {

    constructor(private route:ActivatedRoute,private router: Router) {


    }

    validaPermissoes(permissao): boolean {
        var permissaoValida = false;
        var permissoes : string [] = JSON.parse(localStorage.getItem('permissao'))

        permissao.forEach(element => {
                if(permissoes.indexOf(element) > -1){
                    permissaoValida = true;
                    return false;
                }
        });
        return permissaoValida
    }


  }
