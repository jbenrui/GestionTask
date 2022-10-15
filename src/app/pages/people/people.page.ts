import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PersonDetailsComponent } from 'src/app/components/person-details/person-details.component';
import { Person } from 'src/app/models/person.model';
import { DataPersonService } from 'src/app/services/dataperson.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage {
  public person:Person[]; //Declaro el servicio y lo instancio en la clase home
  constructor(
    private dataPerson:DataPersonService, //Instancio esta variable la cual contendra los datos de la persona.
    private modal:ModalController,
    private activatedRoute : ActivatedRoute //preguntar para que sirve
  ) { }

  ngOnInit() {
  }

  
  getPeople(){ //Creo el metodo para devolver personas
    return this.dataPerson.getPersons(); //Llamo al metodo de la clase DataPersonService y lo devuelvo
  }

  async personForm(person:Person){
    const modal = await this.modal.create({
      component:PersonDetailsComponent,
      componentProps:{
        person:person
      }
    });
    modal.present();//Muestra el modal
    modal.onDidDismiss().then(result =>{
      
    })
  }

  onNewPerson(){
    this.personForm(null); //Si es una persona nueva, presentara el formulario vacio.
  }
}
