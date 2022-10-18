import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { TaskDetailsComponent } from 'src/app/components/task-details/task-details.component';
import { Task } from 'src/app/models/task.model';
import { DataTaskService } from 'src/app/services/datatask.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  public task:Task;
  
  constructor(
    private dataTask:DataTaskService,  
    private modal:ModalController,
    private alert:AlertController //Instacia la clase la cual me permite controlar alertas
  ) { }

  ngOnInit() {
  }

  getTask(){
    return this.dataTask.getTask();
  }
  async presentTaskForm(task:Task){
    const modal = await this.modal.create({
      component:TaskDetailsComponent,
      componentProps:{
        task:task
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.dataTask.addTask(result.data.person);
            break;
          case 'Edit':
            this.dataTask.updateTask(result.data.person);
            break;
          default:
        }
      }
    });
  }
  onNewTask(){
    this.presentTaskForm(null);
  }

  onEditTask(task){
    this.presentTaskForm(task);
  }

  async onDeleteAlert(task){
    const alert = await this.alert.create({
      header: '¿Está seguro de que desear borrar a la persona?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: 'Borrar',
          role: 'confirm',
          handler: () => {
            this.dataTask.deleteTaskById(task.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  onDeleteTask(task){this.onDeleteAlert(task);}
}
