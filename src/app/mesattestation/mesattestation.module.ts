import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesattestationPageRoutingModule } from './mesattestation-routing.module';

import { MesattestationPage } from './mesattestation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesattestationPageRoutingModule
  ],
  declarations: [MesattestationPage]
})
export class MesattestationPageModule {}
