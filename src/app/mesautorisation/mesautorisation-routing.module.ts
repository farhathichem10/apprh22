import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesautorisationPage } from './mesautorisation.page';

const routes: Routes = [
  {
    path: '',
    component: MesautorisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesautorisationPageRoutingModule {}
