import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.scss'],
})
export class TaskComponentComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() task:Task;
  constructor() { }

  ngOnInit() {}

  onEditClick(){
    this.onEdit.emit(this.task)
  }
  onDeleteClick(){
    this.onDelete.emit(this.task)
  }

}
