 
import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { NotificationService } from '@app/core/services';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { BsModalService, BsLocaleService } from 'ngx-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, ModalDirective } from 'ngx-bootstrap';
import { DatePipe,Location } from '@angular/common';
import { PedidosInfoService } from '@app/services/pedidos.service';

@Component({
    selector: 'app-modal-validation',
    templateUrl: './validation.component.html',
    styleUrls: ['./validation.component.css'],
    providers:[NotificationService,DatePipe]
  })

export class ValidationComponent implements OnInit {  

    formulario: FormGroup;
    array_pedi: any;
    alertMessage:string;
    showAlert:boolean = false;
    message:string;

    constructor(
        private formBuilder: FormBuilder,
        protected bsModalRef: BsModalRef,
        private pedidosInfoService: PedidosInfoService
        ){
    
          this.formulario = this.formBuilder.group({
            status: [null, Validators.required],
          });

        }

        @ViewChild('lgModal') public lgModal:ModalDirective;
        @Output() myEvent = new EventEmitter();


        ngOnInit() {

          this.array_pedi = [
            {'id':1,'value':'Pendente'},
            {'id':2,'value':'Aceito'},
            {'id':3,'value':'Recusado'},
          ]

        }

        salvar(){

          let id = localStorage.getItem('id_pedido');
          this.pedidosInfoService.updatePedido(this.formulario.value,id).subscribe(data=>{

            this.alertMessage = 'success';
            this.message = data.response;
            this.showAlert = true
            setTimeout(() => {
              this.showAlert = false
              this.bsModalRef.hide();
            }, 1500);
            this.myEvent.emit(data);
            
          },erro => {

              this.alertMessage = 'danger';
               this.message = erro.error.response;
               this.showAlert = true
               setTimeout(() => {
                 this.showAlert = false
               }, 1500);
               
            });

        }


        fechar(){
          this.bsModalRef.hide();
        }


}