import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandemissionPage } from './demandemission.page';

const routes: Routes = [
  {
    path: '',
    component: DemandemissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandemissionPageRoutingModule {}
