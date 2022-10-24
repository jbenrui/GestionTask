import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AssignmentDetailsComponent } from 'src/app/components/assignment-details/assignment-details.component';
import { Assing } from 'src/app/models/assing.model';
import { DataAssingmentService } from 'src/app/services/dataassignment.service';


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
    return this._dataAssingment.getAssings();
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
      /*if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.dataPerson.addPerson(result.data.person);
            break;
          case 'Edit':
            this.dataPerson.updatePerson(result.data.person);
            break;
          default:
        }
      }*/
    });
  }
  onNewPerson(){
    this.presentAssingForm(null);  
  }

  onEditPerson(assing){
    this.presentAssingForm(assing);
  }

  onDeletePerson(){
    
  }
}
