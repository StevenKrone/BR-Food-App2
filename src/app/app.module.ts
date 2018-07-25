import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Http} from '@angular/http';

import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import {InMemoryRestaurantsService} from './in-memory-restaurants.service'

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterInterceptor } from './inter.interceptor';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { DetailComponent } from './component/detail/detail.component';
import { ListComponent } from './component/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryRestaurantsService),
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
