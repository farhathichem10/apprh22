import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { MesautorisationPageRoutingModule } from './mesautorisation-routing.module';

import { MesautorisationPage } from './mesautorisation.page';

@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,NgxPaginationModule,
    FormsModule,
    IonicModule,
    MesautorisationPageRoutingModule
  ],
  declarations: [MesautorisationPage]
})
export class MesautorisationPageModule {}
