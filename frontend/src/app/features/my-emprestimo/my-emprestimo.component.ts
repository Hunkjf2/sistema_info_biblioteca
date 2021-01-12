import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { NotificationService } from '@app/core/services';
import { EmprestimoInfoService } from '@app/services/emprestimo.service';

@Component({
  selector: 'sa-my-emprestimo',
  templateUrl: './my-emprestimo.component.html',
  styleUrls: ['./my-emprestimo.component.css'],
  providers: [MessageService,NotificationService]
})

export class MyEmprestimoComponent implements OnInit {

  cols: any[];
  adunit: any = {};
  msgs: Message[] = [];
  message: string;
  Iemprestimo: any;

  constructor(
      private notificationService: NotificationService,
      private emprestimoInfoService: EmprestimoInfoService,
      ) { }

  ngOnInit() {
    this.colomun();
    this.getAll();
  }


  getAll(){
    this.emprestimoInfoService.getAll().subscribe(data=>{ this.Iemprestimo = data });
  }


  colomun(){
    this.cols = [
      { field: 'livros.nome', header: 'Livro',sortable: false,width: '50%',class:'ui-p-1 txt-center' },
      { field: 'usuarios.nome', header: 'Cliente',sortable: false,width: '50%',class:'ui-p-1 txt-center' },
      { field: 'data_emprestimo', header: 'Data do Empréstimo',sortable: false,width: '70%',class:'ui-p-1 txt-center' },
      { field: 'data_devolucao', header: 'Data da Devolução',sortable: false,width: '70%',class:'ui-p-1 txt-center' },
      { field: 'status', header: 'Status',sortable: false,width: '20%',class:'ui-p-1 txt-center' },
      { field: 'acoes', header: 'Ações', sortable: false,width: '20%',class:'ui-p-1 txt-center' },
    ];
  }

  devolucao(id,status){

    if(status == 'Entregue'){
      this.notificationService.smallBox({
        content: "<i class='fa fa-check-circle'></i> <i>Este livro, já foi devolvido!",
        color: "#C46A69",
        iconSmall: "fa fa-check fa-1x fadeInRight animated",
        timeout: 4000
      });
      return false;
    }


    this.notificationService.smartMessageBox(
      {
        title: "Devolução<i class='fa fa-warning' style='color:orange;'></i>",
        content: "Tem certeza que deseja devolver este livro?",
        buttons: "[Não][Sim]"
      },
      ButtonPressed => {
        if (ButtonPressed == "Sim") {
             let bind = {'id':id}
             this.emprestimoInfoService.devolucao(bind)
             .subscribe(data => {

                this.notificationService.smallBox({
                  content: "<i class='fa fa-check-circle'></i><i>"+data.response+"</i>",
                  color: "#659265",
                  iconSmall: "fa fa-check fa-1x fadeInRight animated",
                  timeout: 4000
                });
                this.ngOnInit();
             
             },erro => {
            }
        )}

    });

 
  }

  

}
  
