import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditprodPipe } from './editprod.pipe';

@NgModule({
  declarations: [AppComponent, EditprodPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [],
  imports: [ReactiveFormsModule,BrowserModule,Ng2SearchPipeModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
    HttpClientModule,NgxDatatableModule, NgxPaginationModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
