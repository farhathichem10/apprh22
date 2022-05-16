import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoldecongeePageRoutingModule } from './soldecongee-routing.module';

import { SoldecongeePage } from './soldecongee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoldecongeePageRoutingModule
  ],
  declarations: [SoldecongeePage]
})
export class SoldecongeePageModule {}
