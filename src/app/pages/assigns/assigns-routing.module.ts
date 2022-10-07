import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsingnsPage } from './assigns.page';

const routes: Routes = [
  {
    path: '',
    component: AsingnsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsingnsPageRoutingModule {}
