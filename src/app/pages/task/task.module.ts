import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskPageRoutingModule } from './task-routing.module';

import { TaskPage } from './task.page';
import { TaskComponentComponent } from 'src/app/components/task-component/task-component.component';
import { TaskDetailsComponent } from 'src/app/components/task-details/task-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TaskPageRoutingModule
  ],
  declarations: [TaskPage, TaskComponentComponent, TaskDetailsComponent]
})
export class TaskPageModule {}
