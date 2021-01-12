import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";
import { AuthLayoutComponent } from "./shared/layout/app-layouts/auth-layout.component";
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ResetComponent } from './auth/reset/reset.component';
import { AlertComponent } from './auth/alert/alert.component';

const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      { path: "", redirectTo: 'auth/login', pathMatch: 'full' },
      { path: 'auth/login', component: LoginComponent },
      { path: 'auth/reset', component: ResetComponent },
      { path: 'auth/alert', component: AlertComponent },
    ]
  },

  { path: "home", 
    component: MainLayoutComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    loadChildren: "./features/home/home.module#HomeModule",data: {pageTitle: 'visualizar Home'}
  },

  { path: "autor", 
    component: MainLayoutComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    loadChildren: "./features/autor/autor.module#AutorModule",data: {pageTitle: 'visualizar Autor',roles:['visualizar-autor']}
  },

  { path: "grupo", 
    component: MainLayoutComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    loadChildren: "./features/grupo_users/grupo_users.module#GrupoUsersModule",data: {pageTitle: 'visualizar Grupo de Usuário',roles:['visualizar-grupo']}
  },

  { path: "livro", 
    component: MainLayoutComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    loadChildren: "./features/livro/livro.module#LivroModule",data: {pageTitle: 'visualizar Livro',roles:['visualizar-livro']}
  },

  { path: "usuario", 
    component: MainLayoutComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    loadChildren: "./features/usuario/usuario.module#UsuarioModule",data: {pageTitle: 'visualizar Usuário',roles:['visualizar-usuario']}
  },

  { path: "pedidos", 
    component: MainLayoutComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    loadChildren: "./features/pedidos/pedidos.module#PedidosModule",data: {pageTitle: 'visualizar Pedidos',roles:['visualizar-pedido']}
  },
 
  { path: "meus-pedidos", 
    component: MainLayoutComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    loadChildren: "./features/my-pedidos/my-pedidos.module#MyPedidosModule",data: {pageTitle: 'visualizar Meus Pedidos',roles:['visualizar-meu-pedido']}
  },

  { path: "emprestimo", 
    component: MainLayoutComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    loadChildren: "./features/emprestimo/emprestimo.module#EmprestimoModule",data: {pageTitle: 'visualizar Empréstimo',roles:['visualizar-emprestimo']}
  },

  { path: "my-emprestimo", 
    component: MainLayoutComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    loadChildren: "./features/my-emprestimo/my-emprestimo.module#MyEmprestimoModule",data: {pageTitle: 'visualizar Meus Empréstimo',roles:['visualizar-meu-emprestimo']}
  },

  { path: "error-404", 
    component: MainLayoutComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
    loadChildren: "./features/paginas/error-404/error-404.module#Error404Module"
  }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
