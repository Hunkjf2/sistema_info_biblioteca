import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { AuthService } from '../services/auth.service';
import { RouterModule } from '@angular/router';
import { ResetComponent } from './reset/reset.component';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { AlertComponent } from './alert/alert.component';
import { SmartadminEditorsModule } from '@app/shared/forms/editors/smartadmin-editors.module';
import { SharedModule } from '@app/shared/shared.module';
import { SmartadminInputModule } from '@app/shared/forms/input/smartadmin-input.module';
import { SmartadminDatatableModule } from '@app/shared/ui/datatable/smartadmin-datatable.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MessagesModule,
    MessageModule,
    SmartadminEditorsModule,
    SharedModule,
    SmartadminInputModule,
    SmartadminDatatableModule
  ],
  declarations: [ProfileComponent,LoginComponent,ResetComponent,AlertComponent],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
