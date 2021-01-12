import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { AccordionModule} from 'primeng/accordion';
import { TableModule  } from 'primeng/table';
import { ButtonModule,InputTextModule } from 'primeng/primeng';
import { DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'primeng/datatable';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { ModalModule } from 'ngx-bootstrap';
import { MyEmprestimoComponent } from './my-emprestimo.component';
import { myemprestimoRouting } from './my-emprestimo.routing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@app/core/services';
import { RefreshTokenInterceptor } from '@app/interceptors/refresh-token.interceptor';

@NgModule({
  imports: [
    CommonModule,
    myemprestimoRouting,
    SharedModule,
    TableModule,
    AccordionModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    DataTableModule,
    DialogModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    ModalModule
  ],
  declarations: [MyEmprestimoComponent],
  providers:[
    {provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
  ]
})
export class MyEmprestimoModule { }
