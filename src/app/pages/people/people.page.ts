import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { PersonDetailsComponent } from 'src/app/components/person-details/person-details.component';
import { Person } from 'src/app/models/person.model';
import { DataPersonService } from 'src/app/core/services/dataperson.service';

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
    
  ) { }

  ngOnInit() {
  }

  
  getPeople(){ //Creo el metodo para devolver personas
    return this.dataPerson.getPeople(); //Llamo al metodo de la clase DataPersonService y lo devuelvo
  }

  async presentPersonForm(person:Person){
    const modal = await this.modal.create({
      component:PersonDetailsComponent,
      componentProps:{
        person:person
      }
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
  
  onDeletePerson(person){
    this.onDeleteAlert(person);
    
  }
}
