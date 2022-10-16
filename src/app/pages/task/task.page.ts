import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { DataTaskService } from 'src/app/services/datatask.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  public task : Task;
  constructor(
    private dataTask:DataTaskService  
  ) { }

  ngOnInit() {
  }

  getTask(){
    return this.dataTask.getTask();
  }
}
