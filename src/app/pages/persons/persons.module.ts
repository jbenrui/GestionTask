import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonsPageRoutingModule } from './persons-routing.module';

import { PersonsPage } from './persons.page';
import { PeopleComponentModule } from 'src/app/components/people/people.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeopleComponentModule,
    PersonsPageRoutingModule
  ],
  declarations: [PersonsPage]
})
export class PersonsPageModule {}
