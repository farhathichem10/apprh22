import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Addprod2PageRoutingModule } from './addprod2-routing.module';

import { Addprod2Page } from './addprod2.page';

@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    IonicModule,
    Addprod2PageRoutingModule
  ],
  declarations: [Addprod2Page]
})
export class Addprod2PageModule {}
