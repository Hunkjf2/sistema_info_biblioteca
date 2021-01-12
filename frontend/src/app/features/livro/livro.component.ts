import { Component, OnInit , ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { BsModalRef,BsModalService } from 'ngx-bootstrap';
import { NotificationService } from '@app/core/services';
import { LivroService } from '@app/services/livro.service';
import { DetalheComponent } from './detalhe/detalhe.component';
import { PermissoesService } from '@app/services/permissoes.service';

@Component({
  selector: 'sa-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css'],
  providers: [MessageService,NotificationService]
})

export class LivroComponent implements OnInit {

  cols: any[];
  adunit: any = {};
  msgs: Message[] = [];
  message: string;
  Ilivro: any;

  constructor(
      public bsModalRef: BsModalRef,
      public modalService: BsModalService,
      private notificationService: NotificationService,
      private livroService: LivroService,
      public permissoesService: PermissoesService
      ) { }
  formulario: FormGroup;

  ngOnInit() {
    this.colomun();
    this.getAll();
  }


  getAll(){
    this.livroService.getAll().subscribe(data=>{ this.Ilivro = data });
  }


  colomun(){
    if(
      (this.permissoesService.validaPermissoes(['excluir-livro'])) || 
      (this.permissoesService.validaPermissoes(['editar-livro']))  ||
      (this.permissoesService.validaPermissoes(['detalhe-livro']))  ||
      (this.permissoesService.validaPermissoes(['solicitar-livro']))
      ){
        this.cols = [
          { field: 'descricao', header: 'Nome',sortable: false,width: '50%',class:'ui-p-1 txt-center' },
          { field: 'status', header: 'Status', sortable: false,width: '15%',class:'ui-p-1 txt-center' },
          { field: 'acoes', header: 'Ações', sortable: false,width: '20%',class:'ui-p-1 txt-center' },
        ];
    }else{
        this.cols = [
          { field: 'descricao', header: 'Nome',sortable: false,width: '50%',class:'ui-p-1 txt-center' },
          { field: 'status', header: 'Status', sortable: false,width: '15%',class:'ui-p-1 txt-center' },
        ];
    }
  }


  detalhe_livro(id){

      localStorage.setItem('id_livro',id);
      this.bsModalRef = this.modalService.show(DetalheComponent,{class: "modal-md"});
      this.bsModalRef.content.myEvent.subscribe(($e) => {
  
        this.ngOnInit();
       
      }) 
      
  }

  solicitaPedido(id: number){

    let bind = {'id': id};

    this.notificationService.smartMessageBox(
      {
        title: "Empréstimo<i class='fa fa-warning' style='color:orange;'></i>",
        content: "Tem certeza que deseja solicitar empréstimo deste livro?",
        buttons: "[Não][Sim]"
      },
      ButtonPressed => {
        if (ButtonPressed == "Sim") {
             this.livroService.pedidos(bind)
             .subscribe( data => {

                this.notificationService.smallBox({
                  content: "<i class='fa fa-check-circle'></i> <i>"+data.response+"</i>",
                  color: "#659265",
                  iconSmall: "fa fa-check fa-1x fadeInRight animated",
                  timeout: 4000
                });
                this.ngOnInit();
             
             },erro => {

              this.notificationService.smallBox({
                content: "<i class='fa fa-check-circle'></i> <i>"+erro.error.response+"</i>",
                color: "#C46A69",
                iconSmall: "fa fa-check fa-1x fadeInRight animated",
                timeout: 4000
              });

            }
        )}

    });

    

  }


  deletar(id: number){
    this.notificationService.smartMessageBox(
      {
        title: "Excluir<i class='fa fa-warning' style='color:orange;'></i>",
        content: "Tem certeza que deseja excluir este livro?",
        buttons: "[Não][Sim]"
      },
      ButtonPressed => {
        if (ButtonPressed == "Sim") {
             this.livroService.delete(id)
             .subscribe( data => {
       
                this.notificationService.smallBox({
                  content: "<i class='fa fa-check-circle'></i> <i>"+data.response+"</i>",
                  color: "#659265",
                  iconSmall: "fa fa-check fa-1x fadeInRight animated",
                  timeout: 4000
                });
                this.ngOnInit();
             
             },erro => {

              this.notificationService.smallBox({
                content: "<i class='fa fa-check-circle'></i> <i>"+erro.error.response+"</i>",
                color: "#C46A69",
                iconSmall: "fa fa-check fa-1x fadeInRight animated",
                timeout: 4000
              });

            }
        )}

    });

  }

  

}
  
