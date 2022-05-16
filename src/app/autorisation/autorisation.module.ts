import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutorisationPageRoutingModule } from './autorisation-routing.module';

import { AutorisationPage } from './autorisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutorisationPageRoutingModule
  ],
  declarations: [AutorisationPage]
})
export class AutorisationPageModule {}
