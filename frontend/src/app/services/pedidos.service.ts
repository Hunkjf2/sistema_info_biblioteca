import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { RoutesMyPedidos } from '@app/utils/RouteMyPedidos';


@Injectable()
export class PedidosInfoService {

  RoutesMyPedidos: RoutesMyPedidos = new RoutesMyPedidos();
  
  constructor(private http: HttpClient, private router: Router) { }

  getAll(id){
    let token = localStorage.getItem('token');
    let params = new HttpParams();
    params = params.append("id", id);
    return  this.http.get<any>(this.RoutesMyPedidos.webApiUrl+'/meus_pedidos',{ params:params, headers: {'Authorization':"Bearer" + token}});
  }

  getAllPedido(){
    let token = localStorage.getItem('token');
    return  this.http.get<any>(this.RoutesMyPedidos.webApiUrl,{ headers: {'Authorization':"Bearer" + token}});
  }

  updatePedido(dados,id):Observable<any>{
    let token = localStorage.getItem('token');
    return  this.http.put<any>(this.RoutesMyPedidos.webApiUrl+'/'+id,dados,{ headers: {'Authorization':"Bearer" + token}});
  }


}
