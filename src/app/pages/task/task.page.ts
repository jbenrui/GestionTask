import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataAssingmentService, DataTaskService, Task } from 'src/app/core';
import { TaskDetailsComponent } from 'src/app/core/components/task-details/task-details.component';


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
    private alert:AlertController, //Instacia la clase la cual me permite controlar alertas
    private assingSVC:DataAssingmentService
  ) { }

  ngOnInit() {
  }

  getTask(){
    return this.dataTask.task$;
    //return this.dataTask.getTask(); // No me deja borrar, y no sale ningun error en la consola.
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
            //if(task.id == this.assingSVC.getAssingsByIdPerson(task.id).idTask){ //Si la persona esta asignada a una tarea no dejara no podra borrarla.
              //console.log("Esta tarea esta asignada a una persona.");
              
              
           // }else{
              this.dataTask.deleteTaskById(task.id);
           // }
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  onDeleteTask(task){this.onDeleteAlert(task);}
}
