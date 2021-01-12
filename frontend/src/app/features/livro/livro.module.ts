import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
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
import { LivroComponent } from './livro.component';
import { livroRouting } from './livro.routing';
import { FormLivroComponent } from './form-livro/form-livro.component';
import { NgSelectModule } from '@ng-select/ng-select';
import ptBr from '@angular/common/locales/pt';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@app/core/services';
import { RefreshTokenInterceptor } from '@app/interceptors/refresh-token.interceptor';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { ModalModule, BsModalService,BsModalRef,BsLocaleService,BsDatepickerModule} from 'ngx-bootstrap';
import { DetalheComponent } from './detalhe/detalhe.component';

registerLocaleData(ptBr)
defineLocale('pt-br', ptBrLocale); 

@NgModule({
  imports: [
    CommonModule,
    livroRouting,
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
    ModalModule,
    NgSelectModule,
    BsDatepickerModule.forRoot(),
  ],
  entryComponents: [DetalheComponent],
  declarations: [LivroComponent,FormLivroComponent,DetalheComponent],
  providers:[BsModalService,BsModalRef,BsLocaleService,
    {provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
  ]
})
export class LivroModule { }
