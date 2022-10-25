import { NgModule } from '@angular/core';
import { AsingnsPage } from './assigns.page';
import { CoreModule } from 'src/app/core/core.module';
import { AssignmentComponent } from 'src/app/core/components/assignment/assignment.component';
import { AssignmentDetailsComponent } from 'src/app/core/components/assignment-details/assignment-details.component';
import { AsingnsPageRoutingModule } from './assigns-routing.module';

@NgModule({
  imports: [
    CoreModule,
    AsingnsPageRoutingModule
  ],
  declarations: [AsingnsPage, AssignmentComponent , AssignmentDetailsComponent]
})
export class AsingnsPageModule {}
