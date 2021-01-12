import { Component, OnInit , ViewChild } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { NotificationService } from '@app/core/services';
import { PedidosInfoService } from '@app/services/pedidos.service';

@Component({
  selector: 'sa-my-pedidos',
  templateUrl: './my-pedidos.component.html',
  styleUrls: ['./my-pedidos.component.css'],
  providers: [MessageService,NotificationService]
})

export class MyPedidosComponent implements OnInit {

  cols: any[];
  adunit: any = {};
  msgs: Message[] = [];
  message: string;
  Imypedidos: any;

  constructor(
      private pedidosInfoService: PedidosInfoService
      ) { }

  ngOnInit() {
    this.colomun();
    this.getAll();
  }


  getAll(){
    let id = localStorage.getItem('id_usuario');
    this.pedidosInfoService.getAll(id).subscribe(data=> { this.Imypedidos = data  });
  }


  colomun(){
    this.cols = [
      { field: 'id', header: 'Numero do Pedido',sortable: false,width: '70%',class:'ui-p-1 txt-center' },
      { field: 'livros.nome', header: 'Livro',sortable: false,width: '70%',class:'ui-p-1 txt-center' },
      { field: 'status', header: 'Status',sortable: false,width: '70%',class:'ui-p-1 txt-center' },
    ];
  }


}
  
