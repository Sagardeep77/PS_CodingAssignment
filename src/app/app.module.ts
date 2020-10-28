import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataCommunicationService } from './services/data-communication.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserStateInterceptor } from './interceptor/browserstate.interceptor';


import { LandingPageComponent } from './landing-page/landing-page.component';
import { DescriptionCardComponent } from './description-card/description-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatGridListModule } from '@angular/material';
import {LayoutModule,BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DescriptionCardComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    FlexLayoutModule,
    BrowserTransferStateModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [DataCommunicationService,{
    provide: HTTP_INTERCEPTORS,
    useClass: BrowserStateInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
