import { Component, OnInit , ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { DatePipe,Location } from '@angular/common';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { ModalDirective } from "ngx-bootstrap";
import { NotificationService } from '@app/core/services';
import { AutorService } from '@app/services/autor.service';
import { Usuario } from '@app/interfaces/usuario';
import { UsuarioInfoService } from '@app/services/usuario-info.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { WebcamImage} from 'ngx-webcam';

@Component({
  selector: 'sa-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css'],
  providers: [MessageService,NotificationService]
})

export class FormUsuarioComponent implements OnInit {

  constructor(
      private messageService: MessageService,
      private formBuilder: FormBuilder,
      private router: Router,
      private route:ActivatedRoute,
      private notificationService: NotificationService,
      private location: Location,
      private usuarioInfoService: UsuarioInfoService
      ) { 

        this.formulario = this.formBuilder.group({
          name: [null, Validators.required],
          email: [null, Validators.required], 
          id_grupo: [null, Validators.required],
          password: [null, Validators.required],
        });

      }

      formulario: FormGroup;
      button: number;
      alertMessage:string;
      showAlert:boolean = false;
      message:string;
      usuario: Usuario = new  Usuario();
      id_user: number;
      grupo_user: any;
      croppedImage: any = './assets/img/demo/usuario_vazio.png';
      imageChangedEvent: any = '';
      public imageUrl: WebcamImage = null;
      aparecer: number;

  ngOnInit() {

    this.usuarioInfoService.getGrupo().subscribe(grup => {  this.grupo_user = grup });

    let id = this.route.params.subscribe(params =>{
      let id = params['id'];
      this.id_user = id;
      localStorage.setItem('id',id);
      if(!id){
        this.button = 1
        return;
      }else{

        this.usuarioInfoService.getInfo(this.id_user).subscribe(aut =>{
          this.usuario = aut
          this.usuario.password = atob(aut.password)
        });
        this.button = 2
      }
  
    });

  
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    if(this.imageChangedEvent != undefined){
      this.aparecer = 1
    }else{
      this.aparecer = 2
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


  criar(){

    let email = this.formulario.value.email;
    if(this.validateEmail(email)){

      this.usuarioInfoService.store(this.formulario.value).subscribe(data => {

        this.alertMessage = 'success';
        this.message = data.response;
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
          this.location.back();
        }, 1500);
  
      });

    }else{

      this.alertMessage = 'danger';
        this.message = 'Formato de e-mail incorreto.';
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
        }, 1500);

    }

    
  
  }

  edit(){

    this.usuarioInfoService.put(this.formulario.value,this.id_user).subscribe(data => {

      this.alertMessage = 'success';
      this.message = data.response;
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
        this.location.back();
      }, 1500);

    },(err) => {
      
      this.alertMessage = 'danger';
      this.message = err.error.response;
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, 1500);

      return false;
    
    })

  }

  // ShowModalWebcam(){

  //   this.bsModalRef = this.modalService.show(ModalwebcamComponent,{class: "modal-lg"});
  //   this.bsModalRef.content.myEvent.subscribe(($e) => {

  //    this.croppedImage = $e.imageAsDataUrl
  //    this.imagem_web = false;
  //    this.aparecer = 2;
     
  //   });

  // }


  volta(){
    this.location.back();
  }





}
  
