import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { MessageService } from 'primeng/components/common/messageservice';
import { NotificationService } from '@app/core/services';
import { LivroService } from '@app/services/livro.service';
import { Livros } from '@app/interfaces/livros';
import { BsModalRef,BsModalService,BsLocaleService } from 'ngx-bootstrap';

@Component({
  selector: 'sa-form-livro',
  templateUrl: './form-livro.component.html',
  styleUrls: ['./form-livro.component.css'],
  providers: [MessageService,NotificationService]
})

export class FormLivroComponent implements OnInit {

  constructor(
      public bsModalRef: BsModalRef,
      public modalService: BsModalService,
      private formBuilder: FormBuilder,
      private route:ActivatedRoute,
      private location: Location,
      private _localeService: BsLocaleService,
      private livroService: LivroService
      ) { 

        this.formulario = this.formBuilder.group({
          nome: [null, Validators.required],
          autores: [null, Validators.required],
          created_at: [null, Validators.required],
        });

      }

      formulario: FormGroup;
      button: number;
      alertMessage:string;
      showAlert:boolean = false;
      locale = 'pt-br';
      message:string;
      livros: Livros = new  Livros();
      id_livro: number;
      atores: any;
      imagem_web: boolean = true;
      croppedImage: any = './assets/img/demo/usuario_vazio.png';
      aparecer: number;
      

  ngOnInit() {


    this.livroService.getAutor().subscribe(aut=> {this.atores = aut});

    let id = this.route.params.subscribe(params =>{
      let id = params['id'];
      this.id_livro = id;
      localStorage.setItem('id',id);
      if(!id){
        
        this.button = 1
        return;
      }else{

        this.livroService.getInfo(this.id_livro).subscribe(aut =>{
          this.livros = aut
          // this.atores = this.livros.autores
        });
        this.button = 2
      }
  
    });

  
  }


  criar(){

    this.livroService.store(this.formulario.value).subscribe(data => {

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

    this.livroService.put(this.formulario.value,this.id_livro).subscribe(data => {

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


  applyLocale(pop: any) {
    this._localeService.use(this.locale);
  }





}
  
