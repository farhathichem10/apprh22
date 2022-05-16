import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandecongeePageRoutingModule } from './demandecongee-routing.module';

import { DemandecongeePage } from './demandecongee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandecongeePageRoutingModule
  ],
  declarations: [DemandecongeePage]
})
export class DemandecongeePageModule {}
