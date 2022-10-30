import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Assing } from '../../models/assing.model';


@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.scss'],
})
export class AssignmentDetailsComponent implements OnInit {

  form:FormGroup;
  mode: "New" | "Edit" = "New"; //Da informacion sobre el estado del modal

  

  @Input('assing') set assing(assing:Assing){
    if(assing){
      this.form.controls.id.setValue(assing.id);
      this.form.controls.idPerson.setValue(assing.idPerson);
      this.form.controls.idTask.setValue(assing.idTask);
      this.form.controls.dateTime.setValue(assing.dateTime);
      this.mode = "Edit";
    }

  }
  constructor(
              private fb:FormBuilder,
              private modal:ModalController //Instacia la clase, esta clase sirve para controlar el evento del modal. Poder crearlo y cerrarlo
    ) {
    this.form = this.fb.group({ //Creo el formulario
      id:[0],
      idPerson:[0,Validators.min(1)],
      idTask:[0,Validators.min(1)],
      dateTime:["",Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit(){
    console.log(this.form.value)
      this.modal.dismiss({assing: this.form.value, mode: this.mode}, 'ok')//Si el modal es enviado, manda la informacion del objeto.
  }

  onDismiss(result){
    this.modal.dismiss(null,'cancel'); //Si el modal se cierra.No envia el objeto vacio por lo tanto no se modifica, ni se añade nada.
  }

  onChange(event){
    this.form.controls.dateTime.setValue(event.detail.value);
  }

}
