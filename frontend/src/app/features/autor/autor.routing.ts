import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import { AutorComponent } from './autor.component';
import { FormAutorComponent } from './form-autor/form-autor.component';

export const autorRoutes: Routes = [
    {
        path: '',
        component: AutorComponent,
        data: {
            pageTitle: 'Autor'
        },
    },
    {
        path:'novo-autor',
        component:FormAutorComponent,
        data: {pageTitle: 'Novo Autor',roles:['incluir-autor']}
    },
    {   path:':id',
        component:FormAutorComponent,
        data: {pageTitle: 'Editar Autor',roles:['editar-autor']
    }
    }
];

export const autorRouting: ModuleWithProviders = RouterModule.forChild(autorRoutes);