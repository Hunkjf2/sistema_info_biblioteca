import { Component, OnInit , ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDirective } from "ngx-bootstrap";
import { NotificationService } from '@app/core/services';
import { AutorService } from '@app/services/autor.service';
import { PermissoesService } from '@app/services/permissoes.service';

@Component({
  selector: 'sa-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css'],
  providers: [MessageService,NotificationService]
})

export class AutorComponent implements OnInit {

  cols: any[];
  adunit: any = {};
  msgs: Message[] = [];
  message: string;
  Icargo: any;

  constructor(
      private modalService: BsModalService,
      private messageService: MessageService,
      private formBuilder: FormBuilder,
      private router: Router,
      private notificationService: NotificationService,
      private autorService: AutorService,
      public permissoesService:PermissoesService
      ) { }
  formulario: FormGroup;

  ngOnInit() {
    this.colomun();
    this.getAll();
  }


  getAll(){
    this.autorService.getAll().subscribe(data=>{ this.Icargo = data });
  }


  colomun(){

    if((this.permissoesService.validaPermissoes(['excluir-autor'])) || (this.permissoesService.validaPermissoes(['editar-autor']))){
      this.cols = [
        { field: 'descricao', header: 'Nome',sortable: false,width: '70%',class:'ui-p-1 txt-center' },
        { field: 'acoes', header: 'Ações', sortable: false,width: '8%',class:'ui-p-1 txt-center' },
      ];
    }else{
      this.cols = [
        { field: 'descricao', header: 'Nome',sortable: false,width: '70%',class:'ui-p-1 txt-center' },
      ];
    }

    
  }

  deletar(id: number){
    this.notificationService.smartMessageBox(
      {
        title: "Excluir<i class='fa fa-warning' style='color:orange;'></i>",
        content: "Tem certeza que deseja excluir este autor?",
        buttons: "[Não][Sim]"
      },
      ButtonPressed => {
        if (ButtonPressed == "Sim") {
             this.autorService.delete(id)
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
  
