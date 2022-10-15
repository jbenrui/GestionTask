import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Person } from 'src/app/models/person.model'

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})
export class PersonDetailsComponent implements OnInit {

  form:FormGroup; //Variable que contiene el grupo del formulario.
  mode: "New" | "Edit" = "New"; //Preguntar para que es el mode.

  //Traigo los datos con Input y uso set para modificar
  @Input('person') set person(person:Person){
    if(person){// Si existe persona.
      this.form.controls.nombre.setValue(person.nombre); //Pondra este valor
      this.form.controls.apodo.setValue(person.apodo);
      this.form.controls.foto.setValue(person.foto);
      this.mode = "Edit";
    }

  }
  constructor(private formBuilder:FormBuilder, //Instancia la clase para crear el formulario.
              private modal:ModalController //Instacia la clase, esta clase sirve para controlar el evento del modal. Poder crearlo y cerrarlo
    ) {
    this.form = this.formBuilder.group({
      id:[null],
      nombre:['',[Validators.required]],
      apodo:['',[Validators.required]],
      foto:['']
    });
  }

  ngOnInit() {}

  onSubmit(){
      this.modal.dismiss({person: this.form.value, mode: this.mode}, 'ok')//Si el modal es enviado, manda la informacion del objeto.
  }

  onDismiss(result){
    this.modal.dismiss(null,'cancel'); //Si el modal se cierra.No envia el objeto vacio por lo tanto no se modifica, ni se añade nada.
  }
}
