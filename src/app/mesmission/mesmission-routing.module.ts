import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesmissionPage } from './mesmission.page';

const routes: Routes = [
  {
    path: '',
    component: MesmissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesmissionPageRoutingModule {}
