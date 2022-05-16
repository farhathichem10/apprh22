import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoldecongeePage } from './soldecongee.page';

const routes: Routes = [
  {
    path: '',
    component: SoldecongeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoldecongeePageRoutingModule {}
