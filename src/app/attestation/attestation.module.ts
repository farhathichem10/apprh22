import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttestationPageRoutingModule } from './attestation-routing.module';

import { AttestationPage } from './attestation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttestationPageRoutingModule
  ],
  declarations: [AttestationPage]
})
export class AttestationPageModule {}
