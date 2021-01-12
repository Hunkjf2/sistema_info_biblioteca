import { Component, OnInit , ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { DatePipe,Location } from '@angular/common';
import { MessageService } from 'primeng/components/common/messageservice';
import { NotificationService } from '@app/core/services';
import { Autor } from '@app/interfaces/autor';
import { AutorService } from '@app/services/autor.service';

@Component({
  selector: 'sa-autor',
  templateUrl: './form-autor.component.html',
  styleUrls: ['./form-autor.component.css'],
  providers: [MessageService,NotificationService]
})

export class FormAutorComponent implements OnInit {

  constructor(
      private messageService: MessageService,
      private formBuilder: FormBuilder,
      private router: Router,
      private route:ActivatedRoute,
      private notificationService: NotificationService,
      private location: Location,
      private autorService: AutorService
      ) { }

      formulario: FormGroup;
      button: number;
      alertMessage:string;
      showAlert:boolean = false;
      message:string;
      autor: Autor = new  Autor();
      id_autor: number;

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
    });


    let id = this.route.params.subscribe(params =>{
      let id = params['id'];
      this.id_autor = id;
      localStorage.setItem('id',id);
      if(!id){
        this.button = 1
        return;
      }else{

        this.autorService.getInfo(this.id_autor).subscribe(aut =>{
          this.autor = aut
        });
        this.button = 2
      }
  
    });

  
  }


  criar(){

    let bind = {'nome': this.formulario.value.nome}
    this.autorService.storeAutor(bind).subscribe(data => {

      this.alertMessage = 'success';
      this.message = data.response;
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
        this.location.back();
      }, 1500);

      return false;

    })
  
  }

  edit(){

    let bind = {'nome': this.formulario.value.nome, 'id': this.id_autor}
    this.autorService.putAutor(bind).subscribe(data => {

      this.alertMessage = 'success';
      this.message = data.response;
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
        this.location.back();
      }, 1500);

      return false;

    })

  }

  volta(){
    this.location.back();
  }





}
  
