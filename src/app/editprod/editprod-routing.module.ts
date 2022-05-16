import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditprodPage } from './editprod.page';

const routes: Routes = [
  {
    path: '',
    component: EditprodPage
  },
  {
    path: 'editprod/:id',
    component: EditprodPage
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditprodPageRoutingModule {}
