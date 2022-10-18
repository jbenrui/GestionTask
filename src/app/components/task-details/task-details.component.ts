import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {

  formTask:FormGroup; //Variable que contiene el grupo del formulario.
  mode: "New" | "Edit" = "New"; //Sirve para enviar informacion sobre que se esta realizando.

  //Traigo los datos con Input y uso set para modificar
  @Input('task') set task(task:Task){
    if(task){// Si existe persona.
      this.formTask.controls.id.setValue(task.id);
      this.formTask.controls.nombre.setValue(task.nombre); //Pondra este valor
      this.formTask.controls.tiempo.setValue(task.tiempo);
      this.formTask.controls.foto.setValue(task.foto);
      this.mode = "Edit";
    }
  }
  constructor(private formBuilder:FormBuilder, //Instancia la clase para crear el formulario.
              private modal:ModalController //Instacia la clase, esta clase sirve para controlar el evento del modal. Poder crearlo y cerrarlo
    ) {
      this.formTask = this.formBuilder.group({ //Creo el formulario
        id:[null],
        nombre:['',[Validators.required]],
        tiempo:['',[Validators.required]],
        foto:['']
      });
    }

  ngOnInit() {}

  onSubmit(){
    this.modal.dismiss({person: this.formTask.value, mode: this.mode}, 'ok')//Si el modal es enviado, manda la informacion del objeto.
  }

  onDismiss(result){
    this.modal.dismiss(null,'cancel'); //Si el modal se cierra.No envia el objeto vacio por lo tanto no se modifica, ni se añade nada.
  }
}
