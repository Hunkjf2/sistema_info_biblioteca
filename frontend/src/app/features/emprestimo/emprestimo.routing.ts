import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import { EmprestimoComponent } from './emprestimo.component';

export const emprestimoRoutes: Routes = [
    {
        path: '',
        component: EmprestimoComponent,
        data: {
            pageTitle: 'Autor'
        },
    }
];

export const emprestimoRouting: ModuleWithProviders = RouterModule.forChild(emprestimoRoutes);