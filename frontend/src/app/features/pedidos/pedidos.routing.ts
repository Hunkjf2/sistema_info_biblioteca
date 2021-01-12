import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from "@angular/core";
import { PedidosComponent } from './pedidos.component';

export const pedidosRoutes: Routes = [
    {
        path: '',
        component: PedidosComponent,
        data: {
            pageTitle: 'Livro'
        },
    }
];

export const pedidosRouting: ModuleWithProviders = RouterModule.forChild(pedidosRoutes);