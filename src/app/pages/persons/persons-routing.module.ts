import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonsPage } from './persons.page';

const routes: Routes = [
  {
    path: '',
    component: PersonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonsPageRoutingModule {}
