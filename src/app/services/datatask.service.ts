import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class DataTaskService {
  private _task:Task[] = [
    {
      id: 1,
      nombre: 'Lavar los platos',
      tiempo:  3600,
      foto: 'http://drive.google.com/uc?export=view&id=1LiA446NGoXyZ9w8hwdSrR6YD5qs36FsH'
    },
    {
      id: 2,
      nombre: 'Doblar la ropa',
      tiempo:  1300,
      foto: 'http://drive.google.com/uc?export=view&id=1F46gjL67SVSk1Elny3wSLxfOi2JZEDlL'
    },
    {
      id: 3,
      nombre: 'Limpiar el polvo',
      tiempo:  850,
      foto: 'http://drive.google.com/uc?export=view&id=1XWS7bMzhdypPPkKHH801tdtfoX-_3BhL'
    },
    {
      id: 4,
      nombre: 'Preparar la cena',
      tiempo:  2400,
      foto: 'http://drive.google.com/uc?export=view&id=1cdWDAyNb41PKLDYBY7oqEJr6Oq41-hgD'
    }
  ]
  id:number = this._task.length+1;
  constructor() {

  }

  getTask(){
    return this._task;
  }

  getTaskById(id:number){
    return this._task.find(p=>p.id==id);
  }

  deleteTaskById(id:number){
    this._task = this._task.filter(p=>p.id != id); 
  }

  addTask(task:Task){
    task.id = this.id++;
    this._task.push(task);
  }

  updateTask(task:Task){
    var _tasks = this._task.find(p=>p.id==task.id);
    if(_tasks){
        _tasks.nombre = task.nombre;
        _tasks.tiempo = task.tiempo;
        _tasks.foto = task.foto;
    }
    
  }
}