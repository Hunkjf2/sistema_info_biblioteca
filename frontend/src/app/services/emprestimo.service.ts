import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { RoutesEmprestimo } from '@app/utils/RouteEmprestimo';


@Injectable()
export class EmprestimoInfoService {

  RoutesEmprestimo: RoutesEmprestimo = new RoutesEmprestimo();
  
  constructor(private http: HttpClient, private router: Router) { }

  getAll(){
    let token = localStorage.getItem('token');
    return  this.http.get<any>(this.RoutesEmprestimo.webApiUrl+'/meus_emprestimo',{ headers: {'Authorization':"Bearer" + token}});
  }

  getAllEmprestimo(){
    let token = localStorage.getItem('token');
    return  this.http.get<any>(this.RoutesEmprestimo.webApiUrl,{ headers: {'Authorization':"Bearer" + token}});
  }

  devolucao(dados){
    let token = localStorage.getItem('token');
    return  this.http.post<any>(this.RoutesEmprestimo.webApiUrl+'/devolucao',dados,{ headers: {'Authorization':"Bearer" + token}});
  }



}
