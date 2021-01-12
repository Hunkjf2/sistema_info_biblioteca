 
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NotificationService } from '@app/core/services';
import {  FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { ModalDirective } from 'ngx-bootstrap';
import { Message } from 'primeng/components/common/api';
import { LivroService } from '@app/services/livro.service';
import { Livros } from '@app/interfaces/livros';

@Component({
  selector: 'sa-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css'],
  providers: [NotificationService]
})

export class DetalheComponent implements OnInit {

  cols: any[];
  adunit: any = {};
  msgs: Message[] = [];
  message: string;
  Ilivro: any;
  livros: Livros = new Livros();

  constructor(
      private livroService: LivroService,
      protected bsModalRef: BsModalRef,
      ) { }
  formulario: FormGroup;

  @ViewChild('lgModal') public lgModal:ModalDirective;
  @Output() myEvent = new EventEmitter();

  ngOnInit(){

    let id = localStorage.getItem('id_livro');
    this.livroService.Unic(id).subscribe(data=>{
      this.livros = data;
    })

  }

  fechar(){
    this.bsModalRef.hide();
  }

  

}
  
