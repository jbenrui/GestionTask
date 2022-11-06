import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../models/person.model'
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {

  @Output() onEdit = new EventEmitter;
  @Output() onDelete = new EventEmitter;
  @Input() person:Person;
  constructor(
  ){

  }

  ngOnInit(
  ) {

  }

  onEditClick(){
    this.onEdit.emit(this.person); //Cuando se hace click en el boton del template emite hacia fuera el objeto person
  }

  onDeleteClick(){
    this.onDelete.emit(this.person);
  }
}

