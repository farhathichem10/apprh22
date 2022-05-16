import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongeePageRoutingModule } from './congee-routing.module';

import { CongeePage } from './congee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongeePageRoutingModule
  ],
  declarations: [CongeePage]
})
export class CongeePageModule {}
