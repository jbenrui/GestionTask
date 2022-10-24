import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assing } from 'src/app/models/assing.model';
import { DataPersonService } from 'src/app/services/dataperson.service';
import { DataTaskService } from 'src/app/services/datatask.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss'],
})
export class AssignmentComponent implements OnInit {
  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() assing:Assing;

  constructor(
    private _dataPerson:DataPersonService,
    private _dataTask:DataTaskService
  ) { }

  ngOnInit() {}


  getDataPerson(id:number){
    return this._dataPerson.getPersonById(id);
    
  }
  getDataTask(id:number){
    return this._dataTask.getTaskById(id);
  }


  onEditClick(){
    this.onEdit.emit(this.assing);
  }
  onDeleteClick(){
    this.onDelete.emit(this.assing);
  }
}
