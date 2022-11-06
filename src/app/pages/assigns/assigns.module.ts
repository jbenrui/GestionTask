import { NgModule } from '@angular/core';
import { AsingnsPage } from './assigns.page';
import { CoreModule } from 'src/app/core/core.module';
import { AssignmentComponent } from 'src/app/core/components/assignment/assignment.component';
import { AssignmentDetailsComponent } from 'src/app/core/components/assignment-details/assignment-details.component';
import { AsingnsPageRoutingModule } from './assigns-routing.module';
import { PersonSelectableComponent } from 'src/app/core/components/person-selectable/person-selectable.component';
import { TaskSelectableComponent } from 'src/app/core/components/task-selectable/task-selectable.component';
import { DateTimeSelectableComponent } from 'src/app/core/components/date-time-selectable/date-time-selectable.component';

@NgModule({
  imports: [
    CoreModule,
    AsingnsPageRoutingModule
  ],
  declarations: [AsingnsPage,
    AssignmentComponent ,
    AssignmentDetailsComponent,
    PersonSelectableComponent,
    TaskSelectableComponent,
    DateTimeSelectableComponent
  ]
})
export class AsingnsPageModule {}
