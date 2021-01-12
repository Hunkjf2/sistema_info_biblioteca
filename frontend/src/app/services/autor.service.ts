import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutesAutor } from '../utils/RoutesAutor';

@Injectable()
export class AutorService {

  cargoRoutes: RoutesAutor = new RoutesAutor;
  
  constructor(private http: HttpClient, private router: Router) { }

  getAll():Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.get<any>(this.cargoRoutes.webApiUrl, { headers: {'Authorization':"Bearer" + token}});
  }

  storeAutor(dados):Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.post<any>(this.cargoRoutes.webApiUrl,dados, { headers: {'Authorization':"Bearer" + token}});
  }

  putAutor(dados):Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.put<any>(this.cargoRoutes.webApiUrl,dados, { headers: {'Authorization':"Bearer" + token}});
  }

  getInfo(id){
    let token = localStorage.getItem('token');
    return  this.http.get<any>(this.cargoRoutes.webApiUrl+'/'+id,{ headers: {'Authorization':"Bearer" + token}});
  }

  delete(id){
    let token = localStorage.getItem('token');
    return  this.http.delete<any>(this.cargoRoutes.webApiUrl+'/'+id,{ headers: {'Authorization':"Bearer" + token}});
  }


}
