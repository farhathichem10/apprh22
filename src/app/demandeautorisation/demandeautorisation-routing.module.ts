import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeautorisationPage } from './demandeautorisation.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeautorisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeautorisationPageRoutingModule {}
