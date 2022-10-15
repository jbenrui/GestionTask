import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeoplePageRoutingModule } from './people-routing.module';

import { PersonDetailsComponent } from 'src/app/components/person-details/person-details.component';
import { PersonComponent } from 'src/app/components/person/person.component';
import { PeoplePage } from './people.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PeoplePageRoutingModule
  ],
  declarations: [PersonDetailsComponent, PersonComponent, PeoplePage,]
})
export class PeoplePageModule {}
