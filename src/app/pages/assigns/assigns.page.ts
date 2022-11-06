import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DataAssingmentService, Assing, DataPersonService, DataTaskService } from 'src/app/core';
import { AssignmentDetailsComponent } from 'src/app/core/components/assignment-details/assignment-details.component';


@Component({
  selector: 'app-asingns',
  templateUrl: './assigns.page.html',
  styleUrls: ['./assigns.page.scss'],
})
export class AsingnsPage implements OnInit {
  

  public assings:Assing;
  constructor(
    private _dataAssingment:DataAssingmentService,
    private modal:ModalController,
    private alert:AlertController
  ) { }

  ngOnInit() {
  }

  
  getAssing(){
    return this._dataAssingment.assing$;
    
  }

  async presentAssingForm(assing:Assing){
    const modal = await this.modal.create({
      component:AssignmentDetailsComponent,
      componentProps:{
        assing:assing
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          
          case 'New':
            this._dataAssingment.addAssing(result.data.assing);
            break;
          case 'Edit':
            this._dataAssingment.updateAssing(result.data.assing);
            break;
          default:
        }
      }
    });
  }
  onNewAssign(){
    this.presentAssingForm(null);  
  }

  onEditAssign(assing){
    this.presentAssingForm(assing);
  }

  async onDeleteAlert(assing){
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
            //if(person.id == this.assingSVC.getAssingsByIdPerson(person.id).idPerson){ //Si la persona esta asignada a una tarea no dejara no podra borrarla.
              
              
            //}else{
              this._dataAssingment.deleteAssignById(assing.id);
           // }
            
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  
  onDeleteAssign(assing){
    this.onDeleteAlert(assing);
  }
}
