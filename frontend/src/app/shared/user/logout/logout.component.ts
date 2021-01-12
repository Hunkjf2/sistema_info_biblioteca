import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NotificationService } from "@app/core/services/notification.service";

import {UserService} from "@app/core/services/user.service";
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: "sa-logout",
  template: `
<div id="logout" (click)="showPopup()" class="btn-header transparent pull-right">
        <span> <a title="Sign Out"><i class="fa fa-sign-out"></i></a> </span>
    </div>
  `,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
    private notificationService: NotificationService,
    private auth: AuthService) {
  }

  showPopup() {
    this.notificationService.smartMessageBox(
      {
        title:
          "<i class='fa fa-sign-out txt-color-orangeDark'></i> Deseja sair senhor(a) <span class='txt-color-orangeDark'><strong>" + this.auth.getUser().name +"</strong></span> ?",
        content:
          "Tem certeza que deseja sair do sistema",
        buttons: "[Não][Sim]"
      },
      ButtonPressed => {
        if (ButtonPressed == "Sim") {
          this.logout();
        }
      }
    );
  }

  logout() {
    localStorage.clear();
    this.userService.logout()
    // location.reload(true);
    this.router.navigate(["auth/login"]);
  }

  ngOnInit() {}
}
