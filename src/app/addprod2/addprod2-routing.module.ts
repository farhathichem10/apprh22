import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Addprod2Page } from './addprod2.page';

const routes: Routes = [
  {
    path: '',
    component: Addprod2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Addprod2PageRoutingModule {}
