import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.scss'],
})
export class TaskComponentComponent implements OnInit {

  @Input() task:Task;
  constructor() { }

  ngOnInit() {}

}
