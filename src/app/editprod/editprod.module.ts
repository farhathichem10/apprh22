import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditprodPageRoutingModule } from './editprod-routing.module';

import { EditprodPage } from './editprod.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EditprodPageRoutingModule
  ],
  declarations: [EditprodPage]
})
export class EditprodPageModule {}
