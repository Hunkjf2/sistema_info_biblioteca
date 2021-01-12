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
import { UsuarioComponent } from './usuario.component';
import { usuarioRouting } from './usuario.routing';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '@app/core/services';
import { RefreshTokenInterceptor } from '@app/interceptors/refresh-token.interceptor';
import { ModalModule, BsModalService,BsModalRef,BsLocaleService,BsDatepickerModule} from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    usuarioRouting,
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
    ImageCropperModule,
  ],
  declarations: [UsuarioComponent,FormUsuarioComponent],
  providers:[BsModalService,BsModalRef,BsLocaleService,
    {provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
  ]
})
export class UsuarioModule { }
