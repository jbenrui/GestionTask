import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsingnsPageRoutingModule } from './assigns-routing.module';

import { AsingnsPage } from './assigns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsingnsPageRoutingModule
  ],
  declarations: [AsingnsPage]
})
export class AsingnsPageModule {}
