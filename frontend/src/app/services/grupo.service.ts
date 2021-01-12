import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutesGrupo } from '../utils/RoutesGrupo';

@Injectable()
export class GrupoService {

  grupoRoutes: RoutesGrupo = new RoutesGrupo;
  
  constructor(private http: HttpClient, private router: Router) { }

  getAll():Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.get<any>(this.grupoRoutes.webApiUrl, { headers: {'Authorization':"Bearer" + token}});
  }

  store(dados):Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.post<any>(this.grupoRoutes.webApiUrl,dados, { headers: {'Authorization':"Bearer" + token}});
  }

  put(dados):Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.put<any>(this.grupoRoutes.webApiUrl,dados, { headers: {'Authorization':"Bearer" + token}});
  }

  getInfo(id){
    let token = localStorage.getItem('token');
    return  this.http.get<any>(this.grupoRoutes.webApiUrl+'/'+id,{ headers: {'Authorization':"Bearer" + token}});
  }

  delete(id){
    let token = localStorage.getItem('token');
    return  this.http.delete<any>(this.grupoRoutes.webApiUrl+'/'+id,{ headers: {'Authorization':"Bearer" + token}});
  }

  permissao(){
    let token = localStorage.getItem('token');
    return this.http.get<any>(this.grupoRoutes.permiApiUrl, { headers: {'Authorization':`Bearer ${token}`}});
  }


}
