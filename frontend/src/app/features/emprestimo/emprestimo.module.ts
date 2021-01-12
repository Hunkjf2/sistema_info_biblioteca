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
import { EmprestimoComponent } from './emprestimo.component';
import { emprestimoRouting } from './emprestimo.routing';

@NgModule({
  imports: [
    CommonModule,
    emprestimoRouting,
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
  declarations: [EmprestimoComponent]
})
export class EmprestimoModule { }
