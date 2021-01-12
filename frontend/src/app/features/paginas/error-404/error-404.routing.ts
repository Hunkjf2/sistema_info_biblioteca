import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import { Error404Component } from './error-404.component';

export const error404Routes: Routes = [
    {
        path: '',
        component: Error404Component,
        data: {
            pageTitle: 'Clientemensalista'
        },
    
    },
]; 

export const error404Routing: ModuleWithProviders = RouterModule.forChild(error404Routes);

