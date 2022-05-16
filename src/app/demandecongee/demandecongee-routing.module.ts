import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandecongeePage } from './demandecongee.page';

const routes: Routes = [
  {
    path: '',
    component: DemandecongeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandecongeePageRoutingModule {}
