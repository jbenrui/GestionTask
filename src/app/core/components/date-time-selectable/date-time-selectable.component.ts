import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup, IonDatetime } from '@ionic/angular';
import { Assing } from '../../models/assing.model';

export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateTimeSelectableComponent),
  multi: true
};
@Component({
  selector: 'app-date-time-selectable',
  templateUrl: './date-time-selectable.component.html',
  styleUrls: ['./date-time-selectable.component.scss'],
  providers:[USER_PROFILE_VALUE_ACCESSOR]
})
export class DateTimeSelectableComponent implements OnInit, ControlValueAccessor {

  selectedDateTime:string=null;
  propagateChage = (_:any) => {}
  isDisabled:boolean = false;
  constructor() { }
  registerOnTouched(fn: any): void {
    
  }
  
  ngOnInit() {}

  writeValue(obj:any): void{
    this.selectedDateTime = obj;
  }

  registerOnChange(fn: any): void{
    this.propagateChage = fn;
  }

  setDisableState?(isDisabled:boolean){
    this.isDisabled = isDisabled;
  }

  getTime(){ //Devuelve la fecha
    return this.selectedDateTime;
  }

  onDateTimeChanged(event, accordion:IonAccordionGroup){
    this.selectedDateTime = event.detail.value; //Carga la variable con el evento.
    accordion.value=['']; //Cierra el acordeon
    this.propagateChage(this.selectedDateTime); //Propaga el cambio al evento padre (Assign-Details-component en este caso)
  }

  onCancel(datetime:IonDatetime, accordion){ //Cancela la operacion.
    datetime.cancel();
    accordion.value = [''];
  }
  onConfirm(datetime:IonDatetime, accordion){ //Confirma la operacion
    datetime.confirm();
  }

}
