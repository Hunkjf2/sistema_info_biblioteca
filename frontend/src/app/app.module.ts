import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './core/services/token.interceptor';
import { RefreshTokenInterceptor } from './interceptors/refresh-token.interceptor';
import { AplicationErrorHandle } from './app.error-handle';
import { UsuarioInfoService } from './services/usuario-info.service';
import { NotificationService } from "@app/core/services/notification.service";
import { PermissoesService } from '@app/services/permissoes.service';
import { HomeInfoService } from './services/home-info.service';
import { AutorService } from './services/autor.service';
import { GrupoService } from './services/grupo.service';
import { LivroService } from './services/livro.service';
import { PedidosInfoService } from './services/pedidos.service';
import { EmprestimoInfoService } from './services/emprestimo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    CoreModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    UsuarioInfoService,
    NotificationService,
    HomeInfoService,
    PermissoesService,
    AutorService,
    GrupoService,
    LivroService,
    PedidosInfoService,
    EmprestimoInfoService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AplicationErrorHandle}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 
