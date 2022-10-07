import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewtaskPage } from './viewtask.page';

const routes: Routes = [
  {
    path: '',
    component: ViewtaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewtaskPageRoutingModule {}
