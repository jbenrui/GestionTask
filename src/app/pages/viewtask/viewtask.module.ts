import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewtaskPageRoutingModule } from './viewtask-routing.module';

import { ViewtaskPage } from './viewtask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewtaskPageRoutingModule
  ],
  declarations: [ViewtaskPage]
})
export class ViewtaskPageModule {}
