import { NgModule } from '@angular/core';
import { TaskPageRoutingModule } from './task-routing.module';
import { TaskPage } from './task.page';
import { CoreModule } from 'src/app/core/core.module';
import { TaskComponentComponent } from 'src/app/core/components/task-component/task-component.component';
import { TaskDetailsComponent } from 'src/app/core/components/task-details/task-details.component';

@NgModule({
  imports: [
    CoreModule,
    TaskPageRoutingModule
  ],
  declarations: [TaskPage, TaskComponentComponent, TaskDetailsComponent]
})
export class TaskPageModule {}
