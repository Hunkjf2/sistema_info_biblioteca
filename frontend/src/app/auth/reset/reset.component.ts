import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from "@angular/router";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { UsuarioInfoService } from '../../services/usuario-info.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '@app/core/services';



@Component({
  selector: 'app-register',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
  providers: [MessageService]
})
 
export class ResetComponent implements OnInit {
 
  bsModalRef: BsModalRef;
  formulario: FormGroup;
  public termsAgreed = false
  msgs: Message[] = [];
  errorCredentials: boolean = false;
  sucessCredentials: boolean = false;
  mensagem: string;

  constructor(
    private router: Router,  
    private modalService: BsModalService,
    private formBuilder: FormBuilder, 
    private usuarioService: UsuarioInfoService,
    private notificationService: NotificationService) {}
 
   ngOnInit() {

    this.formulario = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
   }

   validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
   }

   register(){

      let email = this.formulario.value.email;

      if(this.validateEmail(email)){

        this.usuarioService.newUserExterno(this.formulario.value).subscribe(data=> {

          this.mensagem = data.response;
          this.sucessCredentials = true
          setTimeout(() => {
            this.sucessCredentials = false;
            this.router.navigate(['auth/login']);
          }, 1500);
  
        },(errorResponse: HttpErrorResponse) => { 
          if(errorResponse.status === 400){
  
            this.mensagem = "E-mail já existe, favor cadastrar um novo e-mail";
            this.errorCredentials = true;
            setTimeout(() => {
              this.errorCredentials = false;
            }, 1500);
            
          }
    
        })

      }else{

        this.errorCredentials = true;
        this.mensagem = "E-mail inválido";
        setTimeout(() => {
          this.errorCredentials = false;
        }, 1500);

      }
  
      


   }



}
