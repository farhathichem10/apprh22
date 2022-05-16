import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeattestationPageRoutingModule } from './demandeattestation-routing.module';

import { DemandeattestationPage } from './demandeattestation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeattestationPageRoutingModule
  ],
  declarations: [DemandeattestationPage]
})
export class DemandeattestationPageModule {}
