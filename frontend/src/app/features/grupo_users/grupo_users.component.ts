import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from "@angular/router";
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NotificationService } from '@app/core/services';
import { GrupoService } from '@app/services/grupo.service';
import { PermissoesService } from '@app/services/permissoes.service';

@Component({
  selector: 'sa-grupo_users',
  templateUrl: './grupo_users.component.html',
  styleUrls: ['./grupo_users.component.css'],
  providers: [MessageService,NotificationService]
})

export class GrupoUsersComponent implements OnInit {

  cols: any[];
  adunit: any = {};
  msgs: Message[] = [];
  message: string;
  Igrupo: any;

  constructor(
      private notificationService: NotificationService,
      private grupoService: GrupoService,
      public permissoesService:PermissoesService
      ) { }
  formulario: FormGroup;

  ngOnInit() {
    this.colomun();
    this.getAll();
  }


  getAll(){
    this.grupoService.getAll().subscribe(data=>{ this.Igrupo = data });
  }


  colomun(){

    if((this.permissoesService.validaPermissoes(['excluir-grupo'])) || (this.permissoesService.validaPermissoes(['editar-grupo']))){
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
        content: "Tem certeza que deseja excluir este grupo de usuário?",
        buttons: "[Não][Sim]"
      },
      ButtonPressed => {
        if (ButtonPressed == "Sim") {
             this.grupoService.delete(id)
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
  
