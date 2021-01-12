import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import { GrupoUsersComponent } from './grupo_users.component';
import { FormGrupoComponent } from './form_users/form-grupo.component';

export const grupoRoutes: Routes = [
    {
        path: '',
        component: GrupoUsersComponent,
        data: {
            pageTitle: 'Grupo Usuário'
        },
    },
    {
        path:'novo-grupo',
        component:FormGrupoComponent,
        data: {pageTitle: 'Novo Grupo',roles:['incluir-grupo']}
    },
    {   path:':id',
        component:FormGrupoComponent,
        data: {pageTitle: 'Editar Grupo',roles:['editar-grupo']
    }
    }
];

export const grupoRouting: ModuleWithProviders = RouterModule.forChild(grupoRoutes);