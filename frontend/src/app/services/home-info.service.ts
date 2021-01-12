import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeInfoService {

  webApiUrl: string = `${environment.api_url}/home/desativar_cliente`;
  constructor(private http: HttpClient, private router: Router) { }

  desetivaCliente(){
    let token = localStorage.getItem('token');
    return this.http.get<any>(this.webApiUrl,{ headers: {'Authorization':`Bearer ${token}`}});
  }


}
