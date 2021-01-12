import { Observable } from 'rxjs/Observable';
import { Injectable, Injector } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PermissoesService } from '@app/services/permissoes.service';
import { ModalDirective } from "ngx-bootstrap";
import { NotificationService } from '@app/core/services';
@Injectable()

export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private auth: AuthService, private router: Router,private permissoesService:PermissoesService,private injector:Injector) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if(this.auth.check() && !this.auth.isTokenExpired()){
      const notificationService = this.injector.get(NotificationService);

      let perms = route.firstChild.data['roles'] as Array<string>
     
      if(perms){
        var match = this.permissoesService.validaPermissoes(perms);

        if(match) return true;
        else{
          
          this.router.navigate(['error-404'])
          
        }

      }
     
      return true
    } 
   
    this.router.navigate(['auth/login']);
    
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        
    if(this.auth.check()){
      const notificationService = this.injector.get(NotificationService);
      let perms = route.data['roles'] as Array<string>

      if(perms){
        var match = this.permissoesService.validaPermissoes(perms);

        if(match) return true;
        else{
          
          this.router.navigate(['error-404'])
        }

      }
      return true
    }
    if (!this.auth.isTokenExpired()) {
      
      return true;
    }   
    this.router.navigate(['auth/login']);

  }
  
}
