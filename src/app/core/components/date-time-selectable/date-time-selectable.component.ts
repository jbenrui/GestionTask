import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup, IonDatetime } from '@ionic/angular';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';
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
  hasValue = false;
  
  ngOnDestroy(): void {
    this.dateSubject.complete();
  }

  private dateSubject = new BehaviorSubject(this.formatDate(moment()));
  public date$ = this.dateSubject.asObservable();
  propagateChange = (_: any) => { }//Propaga los cambios al componente padre.

  isDisabled:boolean = false;

  formatDate(date:moment.Moment){ //da formato a la fecha actual.
    return date.format('YYYY-MM-DDTHH:mmZ');
  }

  ngOnInit() {
  }

  writeValue(obj: any): void { //Escribe el nuevo valor en la variable.
    if(obj){
      this.hasValue = true;
      this.dateSubject.next(this.formatDate(moment(obj))); //Con el objeto fecha, le da formato y lo carga en el observable.
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onDateTimeChanged(event, accordion:IonAccordionGroup){ 
    setTimeout(() => {
      var value = this.formatDate(moment(event.detail.value));
      if(value!=this.dateSubject.getValue())//Si el valor es distinto al valor del formulario.
      {
        this.hasValue = true;

        this.dateSubject.next(value); //Carga el Observable con el nuevo valor

        accordion.value = '';//Cierra el acordeon
        
        this.propagateChange(value);//Propaga el cambio al evento padre (Assign-Details-component en este caso)
      }
      
    }, 100);
  }

  onCancel(datetime:IonDatetime, accordion){//Cancela la operacion.
    datetime.cancel();
    accordion.value='';
  }

  onConfirm(datetime:IonDatetime, accordion){//Confirma la operacion
    datetime.confirm();
  }

}
