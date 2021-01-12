import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../auth/interface/user.model';
import * as jwt_decode from 'jwt-decode';

@Injectable()

export class AuthService {

  webApiUrl: string = `${environment.api_url}/auth/new_user`;

  constructor(private http: HttpClient, private router: Router) { }

  check(): boolean{
      return localStorage.getItem('user') ? true : false;
  }

  login(credentials: {email: string, password: string}): Observable<boolean>{
    localStorage.clear();
    return this.http.post<any>(`${environment.api_url}/auth/login`, credentials)
    .do(data => {

      console.log(data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', btoa(JSON.stringify(data.user)));
      localStorage.setItem('permissao', JSON.stringify(data.array_permissao));
      localStorage.setItem('id_usuario', data.user.id);
        
    });


   
  }

  
  isTokenExpired(token?: string): boolean {
    if(!token) token =  localStorage.getItem('token');
    if(!token) return true;
    const date = this.getTokenExpirationDate(token);
    if(date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) return null;
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  logout(): void{
    this.http.get(`${environment.api_url}/auth/logout`).subscribe(resp => {
      console.log(resp);
      localStorage.clear();
      this.router.navigate(['auth/login']);
    });
  }

  getUser(): User{
    return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))): null;
  }

  setUser(): Promise<boolean>{
    return this.http.get<any>(`${environment.api_url}/auht/me`).toPromise().then(data => {
      if(data.user){
        localStorage.setItem('user',btoa(JSON.stringify(data.user)));
        return true;
      }
      return false;
    });
  }

}
