import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongeePage } from './congee.page';

const routes: Routes = [
  {
    path: '',
    component: CongeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongeePageRoutingModule {}
