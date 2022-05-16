import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MescongeePageRoutingModule } from './mescongee-routing.module';

import { MescongeePage } from './mescongee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MescongeePageRoutingModule
  ],
  declarations: [MescongeePage]
})
export class MescongeePageModule {}
