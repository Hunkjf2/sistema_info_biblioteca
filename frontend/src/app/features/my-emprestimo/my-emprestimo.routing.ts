import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import { MyEmprestimoComponent } from './my-emprestimo.component';

export const myemprestimoRoutes: Routes = [
    {
        path: '',
        component: MyEmprestimoComponent,
        data: {
            pageTitle: 'Meus Empréstimo'
        },
    }
];

export const myemprestimoRouting: ModuleWithProviders = RouterModule.forChild(myemprestimoRoutes);