import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PersonDetailsComponent } from 'src/app/core/components/person-details/person-details.component';
import { DataAssingmentService, DataPersonService, Person } from 'src/app/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit{
  public person:Person[]; //Declaro el servicio y lo instancio en la clase home
  constructor(
    private dataPerson:DataPersonService, //Instancio esta clase la cual contendra los datos de la persona.
    private modal:ModalController,
    private alert:AlertController, //Instacia la clase la cual me permite controlar alertas
    private assingSVC:DataAssingmentService //Instacia la clase del servicio assignment
    
  ) { }

  ngOnInit() {
  }

  
  getPeople(){ //Creo el metodo para devolver personas
    return this.dataPerson.person$; //Llamo al metodo de la clase DataPersonService y lo devuelvo
  }

  async presentPersonForm(person:Person){
    const modal = await this.modal.create({
      component:PersonDetailsComponent,
      componentProps:{
        person:person
      },
      //cssClass:"modal-full-right-side" Pone el modal a full en la derecha
    });
    modal.present();
    modal.onDidDismiss().then(result=>{
      if(result && result.data){
        switch(result.data.mode){
          case 'New':
            this.dataPerson.addPerson(result.data.person);
            break;
          case 'Edit':
            this.dataPerson.updatePerson(result.data.person);
            break;
          default:
        }
      }
    });
  }
  
  onNewPerson(){
    this.presentPersonForm(null);  
  }

  onEditPerson(person){
    this.presentPersonForm(person);
  }

  async onDeleteAlert(person){
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
              this.dataPerson.deletePersonById(person.id);
            
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  
  async onPersonExistsAlert(person){
    const alert = await this.alert.create({
      header: 'Error',
      message: 'No es posible borrar la persona porque está asignada a una tarea',
      buttons: [
        {
          text: 'Cerrar',
          role: 'close',
          handler: () => {
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  onDeletePerson(person){
    if(!this.assingSVC.getAssingsById(person.id))
      this.onDeleteAlert(person);
    else
      this.onPersonExistsAlert(person);
    
  }
}
