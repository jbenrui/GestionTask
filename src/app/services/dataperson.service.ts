import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class DataPersonService {
  private _person:Person[] = [
    {
      id: 0,
      nombre: 'Jose Antonio',
      apodo:  'Hijo mayor',
      foto: 'http://drive.google.com/uc?export=view&id=1dTD1aemHNG7hfjztTxEyXFvp4hZsPD5j'
    },
    {
      id: 1,
      nombre: 'Francisco Javier',
      apodo:  'Hijo menor',
      foto: 'http://drive.google.com/uc?export=view&id=1JUp0ES_V5WyMSNvD1qjB_yc7n6_3pvEW'
    },
    {
      id: 2,
      nombre: 'Jose Antonio',
      apodo:  'Padre',
      foto: 'http://drive.google.com/uc?export=view&id=1MlO1YViatOBIpIaqM0rPGMcNjoQWvRmb'
    },
    {
      id: 3,
      nombre: 'Maria Dolores',
      apodo:  'Madre',
      foto: 'http://drive.google.com/uc?export=view&id=1qJlC0am4aM0KdHcafo3vZSdMAV2s2B_S'
    }
  ]


  id:number = this._person.length+1;
  constructor() {

  }

  getPeople(){
    return this._person;
  }

  getPersonById(id:number){
    return this._person.find(p=>p.id==id);
  }

  deletePersonById(id:number){
    this._person = this._person.filter(p=>p.id != id); 
  }

  addPerson(person:Person){
    person.id = this.id++;
    this._person.push(person);
  }

  updatePerson(person:Person){
    var _person = this._person.find(p=>p.id==person.id);
    if(_person){
      _person.nombre = person.nombre;
      _person.apodo = person.apodo;
      _person.foto = person.foto;
    }
    
  }

  
}
