import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import { MyPedidosComponent } from './my-pedidos.component';

export const mypedidosRoutes: Routes = [
    {
        path: '',
        component: MyPedidosComponent,
        data: {
            pageTitle: 'Meus Pedidos'
        },
    },
];

export const mypedidosRouting: ModuleWithProviders = RouterModule.forChild(mypedidosRoutes);