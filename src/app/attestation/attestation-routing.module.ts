import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttestationPage } from './attestation.page';

const routes: Routes = [
  {
    path: '',
    component: AttestationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttestationPageRoutingModule {}
