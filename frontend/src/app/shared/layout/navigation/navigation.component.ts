import {Component, OnInit} from '@angular/core';
import {LoginInfoComponent} from "../../user/login-info/login-info.component";
import { PermissoesService } from '@app/services/permissoes.service';


@Component({

  selector: 'sa-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  constructor(public permissoesService:PermissoesService) {
  }

  ngOnInit() {
  }

}
