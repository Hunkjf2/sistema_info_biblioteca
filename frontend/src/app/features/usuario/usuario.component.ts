import { Component, OnInit } from '@angular/core';
import { UsuarioInfoService } from '../../services/usuario-info.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { MessageService } from 'primeng/components/common/messageservice';
import { NotificationService } from '@app/core/services';
import { PermissoesService } from '@app/services/permissoes.service';


@Component({
  selector: 'sa-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [MessageService]
})
 
export class UsuarioComponent implements OnInit {
  
  Iusuario: any[];
  cols: any[];
  public formulario;
  alertMessage:string;
  showAlert:boolean = false;
  message:string;

  constructor(
    private notificationService: NotificationService,
    private usuarioService: UsuarioInfoService,
    public  permissoesService: PermissoesService
    ) {


     }

  ngOnInit() {

    this.colunas();
    this.getAll();

  }

  getAll(){
    this.usuarioService.getAllUser().subscribe(data=>{ this.Iusuario = data });
  }


  colunas(){

    if((this.permissoesService.validaPermissoes(['excluir-usuario'])) || (this.permissoesService.validaPermissoes(['editar-usuario']))){
      this.cols = [
        { field: 'name', header: 'Nome', sortable: false,width: '50%',class:'ui-p-1 txt-center'  },
        { field: 'email', header: 'E-Mail', sortable: false,width: '20%',class:'ui-p-1 txt-center'  },
        { field: 'grupo', header: 'Grupo', sortable: false,width: '20%',class:'ui-p-1 txt-center'},
        { field: 'acoes', header: 'Ações', sortable: false,width: '20%',class:'ui-p-1 txt-center' },
      ];
    }else{
      this.cols = [
        { field: 'name', header: 'Nome', sortable: false,width: '50%',class:'ui-p-1 txt-center'  },
        { field: 'email', header: 'E-Mail', sortable: false,width: '20%',class:'ui-p-1 txt-center'  },
        { field: 'grupo', header: 'Grupo', sortable: false,width: '20%',class:'ui-p-1 txt-center'},
      ];

    }

   

  }

  deletar(id){

    this.notificationService.smartMessageBox(
      {
        title: "Excluir<i class='fa fa-warning' style='color:orange;'></i>",
        content: "Tem certeza que deseja excluir este autor?",
        buttons: "[Não][Sim]"
      },
      ButtonPressed => {
        if (ButtonPressed == "Sim") {
             this.usuarioService.destroy(id)
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
