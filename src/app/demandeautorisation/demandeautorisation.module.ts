import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeautorisationPageRoutingModule } from './demandeautorisation-routing.module';

import { DemandeautorisationPage } from './demandeautorisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeautorisationPageRoutingModule
  ],
  declarations: [DemandeautorisationPage]
})
export class DemandeautorisationPageModule {}
