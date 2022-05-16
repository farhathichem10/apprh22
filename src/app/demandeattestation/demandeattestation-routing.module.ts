import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeattestationPage } from './demandeattestation.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeattestationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeattestationPageRoutingModule {}
