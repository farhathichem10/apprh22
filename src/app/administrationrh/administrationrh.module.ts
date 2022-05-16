import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrationrhPageRoutingModule } from './administrationrh-routing.module';

import { AdministrationrhPage } from './administrationrh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrationrhPageRoutingModule
  ],
  declarations: [AdministrationrhPage]
})
export class AdministrationrhPageModule {}
