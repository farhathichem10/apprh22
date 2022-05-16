import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesattestationPage } from './mesattestation.page';

const routes: Routes = [
  {
    path: '',
    component: MesattestationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesattestationPageRoutingModule {}
