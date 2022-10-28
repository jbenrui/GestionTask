import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Assing } from '../../models/assing.model';
import { Person } from '../../models/person.model';
import { Task } from '../../models/task.model';
import { DataPersonService } from '../../services/dataperson.service';
import { DataTaskService } from '../../services/datatask.service';


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
  constructor(private formBuilder:FormBuilder,
              private personSVC:DataPersonService,
              private taskSVC:DataTaskService,
              private modal:ModalController //Instacia la clase, esta clase sirve para controlar el evento del modal. Poder crearlo y cerrarlo
    ) {
    this.form = this.formBuilder.group({ //Creo el formulario
      id:0,
      idPerson:[0,Validators.min(1)],
      idTask:[0,Validators.min(1)],
      dateTime:["",Validators.required]
    });
  }

  @Input() person:Person;

  @Input() task:Task;

  ngOnInit() {}

  onSubmit(){
    console.log(this.form.value)
      this.modal.dismiss({assing: this.form.value, mode: this.mode}, 'ok')//Si el modal es enviado, manda la informacion del objeto.
  }

  onDismiss(result){
    this.modal.dismiss(null,'cancel'); //Si el modal se cierra.No envia el objeto vacio por lo tanto no se modifica, ni se añade nada.
  }

  getPeople(){
    return this.personSVC.getPeople();
  }

  getTask(){
    return this.taskSVC.getTask();
  }

  onChange(event){
    console.log(event.detail.value);
    this.form.controls.dateTime.setValue(event.detail.value);
  }

}
