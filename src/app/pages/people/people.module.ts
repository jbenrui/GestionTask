import { NgModule } from '@angular/core';
import { PeoplePageRoutingModule } from './people-routing.module';
import { PeoplePage } from './people.page';
import { CoreModule } from 'src/app/core/core.module';
import { PersonComponent } from 'src/app/core/components/person/person.component';
import { PersonDetailsComponent } from 'src/app/core/components/person-details/person-details.component';

@NgModule({
  imports: [
    CoreModule,
    PeoplePageRoutingModule
  ],
  declarations: [PersonDetailsComponent, PersonComponent, PeoplePage,]
})
export class PeoplePageModule {}
