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
  mode: "New" | "Edit" = "New"; //

  //Traigo los datos con Input y uso set para modificar
  @Input('person') set person(person:Person){
    if(person){// Si existe persona.
      this.form.controls.name.setValue(person.nombre);
      this.form.controls.name.setValue(person.apodo);
      this.form.controls.name.setValue(person.foto);
      this.mode = "Edit";
    }

  }
  constructor(private formBuilder:FormBuilder,
    private modal:ModalController
    ) {
    this.form = this.formBuilder.group({
      id:[null],
      name:['',[Validators.required]],
      nickname:['',[Validators.required]],
      picture:['']
    })
  }

  ngOnInit() {}

  onSubmit(){
      this.modal.dismiss({person: this.form.value, mode: this.mode}, 'ok')
  }
}
