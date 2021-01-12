import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from "@angular/core";
import { UsuarioComponent } from './usuario.component';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';

export const usuarioRoutes: Routes = [
    {
        path: '',
        component: UsuarioComponent,
        data: {
            pageTitle: 'Usuário'
        },
    },
    {
        path:'novo-usuario',
        component:FormUsuarioComponent,
        data: {pageTitle: 'Novo Usuário',roles:['incluir-usuario']}
    },
    {   path:':id',
        component:FormUsuarioComponent,
        data: {pageTitle: 'Editar Usuário',roles:['editar-usuario']
    }
    }
];

export const usuarioRouting: ModuleWithProviders = RouterModule.forChild(usuarioRoutes);