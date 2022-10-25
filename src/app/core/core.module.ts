
import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: 
  [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),//Indica que va a ser inyectado hacia la raiz de los modulos.
    ReactiveFormsModule
  ],
  exports:
  [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ]

})

export class CoreModule {}