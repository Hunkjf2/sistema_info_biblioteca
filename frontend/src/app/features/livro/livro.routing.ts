import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from "@angular/core";
import { LivroComponent } from './livro.component';
import { FormLivroComponent } from './form-livro/form-livro.component';

export const livroRoutes: Routes = [
    {
        path: '',
        component: LivroComponent,
        data: {
            pageTitle: 'Livro'
        },
    },
    {
        path:'novo-livro',
        component:FormLivroComponent,
        data: {pageTitle: 'Novo Livro',roles:['incluir-livro']}
    },
    {   path:':id',
        component:FormLivroComponent,
        data: {pageTitle: 'Editar Livro',roles:['editar-livro']
    }
    }
];

export const livroRouting: ModuleWithProviders = RouterModule.forChild(livroRoutes);