import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { IonicModule } from '@ionic/angular';

import { MesmissionPageRoutingModule } from './mesmission-routing.module';

import { MesmissionPage } from './mesmission.page';

@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    IonicModule,
    MesmissionPageRoutingModule
  ],
  declarations: [MesmissionPage]
})
export class MesmissionPageModule {}
