import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandemissionPageRoutingModule } from './demandemission-routing.module';

import { DemandemissionPage } from './demandemission.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandemissionPageRoutingModule
  ],
  declarations: [DemandemissionPage]
})
export class DemandemissionPageModule {}
