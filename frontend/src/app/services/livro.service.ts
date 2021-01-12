import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutesLivro } from '../utils/RoutesLivro';

@Injectable()
export class LivroService {

  livroRoutes: RoutesLivro = new RoutesLivro;
  
  constructor(private http: HttpClient, private router: Router) { }

  getAll():Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.get<any>(this.livroRoutes.webApiUrl, { headers: {'Authorization':"Bearer" + token}});
  }

  getAutor():Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.get<any>(this.livroRoutes.autorApiUrl, { headers: {'Authorization':"Bearer" + token}});
  }

  store(dados):Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.post<any>(this.livroRoutes.webApiUrl,dados, { headers: {'Authorization':"Bearer" + token}});
  }

  put(dados,id):Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.put<any>(this.livroRoutes.webApiUrl+'/'+id,dados, { headers: {'Authorization':"Bearer" + token}});
  }

  getInfo(id):Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.get<any>(this.livroRoutes.webApiUrl+'/'+id,{ headers: {'Authorization':"Bearer" + token}});
  }

  delete(id):Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.delete<any>(this.livroRoutes.webApiUrl+'/'+id,{ headers: {'Authorization':"Bearer" + token}});
  }

  pedidos(dados):Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.post<any>(this.livroRoutes.webApiUrl+'/pedido',dados, { headers: {'Authorization':"Bearer" + token}});
  }

  Unic(id):Observable<any>{
    let token = localStorage.getItem('token');
    let params = new HttpParams();
    params = params.append("id", id);
    return  this.http.get<any>(this.livroRoutes.webApiUrl+'/detial/'+id,{ params:params, headers: {'Authorization':"Bearer" + token}});
  }



}
