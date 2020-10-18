import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerStateInterceptor } from './services/interceptor/serverstate.interceptor';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';

@NgModule({
  imports: [
    AppModule,
    CommonModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerTransferStateModule,
    FlexLayoutServerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServerStateInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppServerModule {

}
