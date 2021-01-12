import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { NotificationService } from '@app/core/services';
import { EmprestimoInfoService } from '@app/services/emprestimo.service';

@Component({
  selector: 'sa-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.css'],
  providers: [MessageService,NotificationService]
})

export class EmprestimoComponent implements OnInit {

  cols: any[];
  adunit: any = {};
  msgs: Message[] = [];
  message: string;
  Iemprestimo: any;

  constructor(
      private emprestimoInfoService: EmprestimoInfoService,
      ) { }

  ngOnInit() {
    this.colomun();
    this.getAll();
  }


  getAll(){
    this.emprestimoInfoService.getAllEmprestimo().subscribe(data=>{ this.Iemprestimo = data });
  }


  colomun(){
    this.cols = [
      { field: 'livros.nome', header: 'Livro',sortable: false,width: '50%',class:'ui-p-1 txt-center' },
      { field: 'usuarios.nome', header: 'Cliente',sortable: false,width: '50%',class:'ui-p-1 txt-center' },
      { field: 'data_emprestimo', header: 'Data do Empréstimo',sortable: false,width: '70%',class:'ui-p-1 txt-center' },
      { field: 'data_devolucao', header: 'Data da Devolução',sortable: false,width: '70%',class:'ui-p-1 txt-center' },
      { field: 'status', header: 'Status',sortable: false,width: '20%',class:'ui-p-1 txt-center' },
    ];
  }

  

}
  
