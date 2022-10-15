import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class DataPersonService {
  person:Person[] = [
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
  constructor() { }

  public getPersons(): Person[]{ //devuelve el objeto persona del array
    return this.person;
  }
  
  public getPersonsById(id:number): Person{
    return this.person[id];
  }

  
}
