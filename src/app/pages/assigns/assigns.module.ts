import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsingnsPageRoutingModule } from './assigns-routing.module';

import { AsingnsPage } from './assigns.page';
import { AssignmentComponent } from 'src/app/components/assignment/assignment.component';
import { AssignmentDetailsComponent } from 'src/app/components/assignment-details/assignment-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AsingnsPageRoutingModule
  ],
  declarations: [AsingnsPage, AssignmentComponent , AssignmentDetailsComponent]
})
export class AsingnsPageModule {}
