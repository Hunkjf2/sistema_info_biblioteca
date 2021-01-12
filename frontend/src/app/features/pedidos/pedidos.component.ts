import { Component, OnInit, ɵConsole } from '@angular/core';
import { PedidosInfoService } from '@app/services/pedidos.service';
import { BsModalRef,BsModalService } from 'ngx-bootstrap';
import { ValidationComponent } from './validation/validation.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  cols: any[];
  adunit: any = {};
  message: string;
  Ipedidos: any;


  constructor(private pedidosInfoService:PedidosInfoService,
              public bsModalRef: BsModalRef,
              public modalService: BsModalService,) { }

  ngOnInit() {
    this.colomun();
    this.getAll();
  }


  getAll(){
    this.pedidosInfoService.getAllPedido().subscribe(data=>{ this.Ipedidos = data });
  }

  ShowPedidos(id){
    localStorage.setItem('id_pedido',id);
    this.bsModalRef = this.modalService.show(ValidationComponent,{class: "modal-md"});
    this.bsModalRef.content.myEvent.subscribe(($e) => {

      this.ngOnInit();
     
    }) 
  }

  colomun(){
    this.cols = [
      { field: 'id', header: 'Numero do Pedido',sortable: false,width: '20%',class:'ui-p-1 txt-center' },
      { field: 'livros.nome', header: 'Livro',sortable: false,width: '70%',class:'ui-p-1 txt-center' },
      { field: 'status', header: 'Status',sortable: false,width: '30%',class:'ui-p-1 txt-center' },
      { field: 'acoes', header: 'Ações', sortable: false,width: '20%',class:'ui-p-1 txt-center' },
    ];
  }


}
