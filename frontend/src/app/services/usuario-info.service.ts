import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { RoutesUsuario } from '@app/utils/RoutesUsuario';


@Injectable()
export class UsuarioInfoService {

  RoutesUsuario: RoutesUsuario = new RoutesUsuario();
  
  constructor(private http: HttpClient, private router: Router) { }

  getAllUser():Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.get<any>(this.RoutesUsuario.webApiUrl, { headers: {'Authorization':"Bearer" + token}});
  }

  store(dados):Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.post<any>(this.RoutesUsuario.webApiUrl,dados, { headers: {'Authorization':"Bearer" + token}});
  }

  put(dados,id):Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.put<any>(this.RoutesUsuario.webApiUrl+'/'+id,dados, { headers: {'Authorization':"Bearer" + token}});
  }

  getGrupo():Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.get<any>(this.RoutesUsuario.grupoApiUrl, { headers: {'Authorization':"Bearer" + token}});
  }

  getInfo(id):Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.get<any>(this.RoutesUsuario.webApiUrl+'/'+id, { headers: {'Authorization':"Bearer" + token}});
  }

  newUserExterno(dados){
    let token = localStorage.getItem('token');
    return  this.http.post<any>(this.RoutesUsuario.webApiUrl+'/new_conta',dados, { headers: {'Authorization':"Bearer" + token}});
  }

  destroy(id){
    let token = localStorage.getItem('token');
    return  this.http.delete<any>(this.RoutesUsuario.webApiUrl+'/'+id,{ headers: {'Authorization':"Bearer" + token}});
  }


}
