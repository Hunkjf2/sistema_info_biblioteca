import { Component, OnInit , ViewChild } from '@angular/core';
import { FormControl,FormBuilder, FormGroup,Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { MessageService } from 'primeng/components/common/messageservice';
import { NotificationService } from '@app/core/services';
import { GrupoService } from '@app/services/grupo.service';
import { Grupo } from '@app/interfaces/grupo';

@Component({
  selector: 'sa-form-grupo',
  templateUrl: './form-grupo.component.html',
  styleUrls: ['./form-grupo.component.css'],
  providers: [MessageService,NotificationService]
})

export class FormGrupoComponent implements OnInit {

  constructor(
      private formBuilder: FormBuilder,
      private route:ActivatedRoute,
      private location: Location,
      private grupoService: GrupoService
      ) { }

      public formulario;
      button: number;
      alertMessage:string;
      showAlert:boolean = false;
      grupo_usuario: Grupo = new  Grupo();
      grupo_permissao: Grupo[];
      message:string;
      id_grupo: number;
      permissao_list: any;
      orders = [];
      marcar: boolean = false;
      get_perm?;
      array:any;

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      descricao: [null, Validators.required],
      permissaoArray: this.formBuilder.array([]),
    });


    let id = this.route.params.subscribe(params =>{
      let id = params['id'];
      this.id_grupo = id;
      localStorage.setItem('id',id);
      if(!id){

        this.grupoService.permissao().subscribe(grupo_dados=>{
          this.permissao_list = grupo_dados
          this.orders = this.permissao_list
          this.orders.map((o, i) => {
            const control = new FormControl();
            (this.formulario.controls.permissaoArray as FormArray).push(control);
          });
        });

        this.button = 1
        return;
      }else{

        this.grupoService.getInfo(+this.id_grupo).subscribe(data =>{
          this.permissao_list = data[0]
          this.grupo_usuario = data[1]

            this.get_perm = data[1].permissao_grupo
            this.orders = this.permissao_list

            console.log(this.permissao_list);
            let rr;
            this.orders.forEach(x => {

              this.get_perm.forEach(y => {

                if (x.id === y.id) {
                  rr = x.id
                }

              })
            
              const control = new FormControl(x.id === rr);
              (this.formulario.controls.permissaoArray as FormArray).push(control);
         
            })
        });

        this.button = 2
      }
  
    });

  
  }

  allTrades(event){

    if(event.target.checked){
      this.marcar = true
      for(let i=0;i <= this.formulario.controls['permissaoArray'].length -1;i++){
        this.formulario.controls['permissaoArray'].controls[i].patchValue(true)
      }
    }else{
      this.marcar = false
      for(let i=0;i <= this.formulario.controls['permissaoArray'].length -1;i++){
        this.formulario.controls['permissaoArray'].controls[i].patchValue(false)
      }
    }
    
  }


  onCheckChange(event) {
    const formArray: FormArray = this.formulario.get('permissaoArray') as FormArray;
    if(event.target.checked){
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else{
      let i: number = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if(ctrl.value == event.target.value) {
          formArray.removeAt(i);
          return;
        }
  
        i++;
      });
    }
  }


  criar(){

    let bind = {'descricao': this.formulario.value.descricao}
    this.grupoService.store(bind).subscribe(data => {

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

    const selectedOrderIds = this.formulario.value.permissaoArray
        .map((v, i) => v ? this.orders[i].id : null)
        .filter(v => v !== null);
        
    let bind = {
      'descricao': this.formulario.value.descricao, 
      'id': this.id_grupo,
      'permissaoArray':selectedOrderIds
    }

    this.grupoService.put(bind).subscribe(data => {

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
  
