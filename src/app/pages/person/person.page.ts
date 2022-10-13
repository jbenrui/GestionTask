import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from 'src/app/models/person.model';
import { DataPersonService } from 'src/app/services/dataperson.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage {
  public person:People[]; //Declaro el servicio y lo instancio en la clase home
  constructor(
    private dataPerson:DataPersonService, //Instancio esta variable la cual contendra los datos de la persona.
    private activatedRoute : ActivatedRoute //preguntar para que sirve
  ) { }

  ngOnInit() {
  }

  getPeople(){ //Creo el metodo para devolver personas
    return this.dataPerson.getPersons(); //Llamo al metodo de la clase DataPersonService y lo devuelvo
  }
}
