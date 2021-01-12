import {Component, OnInit} from '@angular/core';
import { UserService } from '@app/core/services/user.service';
import { LayoutService } from '@app/core/services/layout.service';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';

@Component({

  selector: 'sa-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css'],
}) 
export class LoginInfoComponent implements OnInit {

  nome: string
  foto: string
  constructor(
    public us: UserService,private layoutService: LayoutService, private auth: AuthService) {
  }

  ngOnInit() {
    this.nome = JSON.parse(atob(localStorage.getItem('user'))).name
    this.foto = JSON.parse(atob(localStorage.getItem('user'))).foto
    if(this.foto == null){
      this.foto = './assets/img/demo/usuario_vazio.png';
    }else{
      this.foto = environment.api_img+this.foto
      
    }

    // this.environment+
  }

  toggleShortcut() {
    this.layoutService.onShortcutToggle()
  }

}
