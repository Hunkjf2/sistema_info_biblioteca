import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';
import {HomeComponent} from "./home.component";
import { SharedModule } from '@app/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RefreshTokenInterceptor } from '@app/interceptors/refresh-token.interceptor';
import { TokenInterceptor } from '@app/core/services';
import {ChartModule} from 'primeng/chart';

@NgModule({ 
  imports: [
    CommonModule,
    homeRouting,
    SharedModule,
    ChartModule
  ],
  declarations: [HomeComponent],
  providers:[
    {provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true }
 ],
})
export class HomeModule { }
