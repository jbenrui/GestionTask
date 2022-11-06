import { Injectable } from '@angular/core';
import { Assing } from '../models/assing.model';
import * as moment from 'moment-timezone';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataAssingmentService{

    private moment:any = moment;
    private _assing:Assing[] = [
        {
            id:1,
            idPerson:1,
            idTask:1,
            dateTime:this.moment().add(1,'days').toISOString(),
            createdAt:this.moment().toISOString()

        },
        {
            id:2,
            idPerson:2,
            idTask:2,
            dateTime:this.moment().add(1,'days').toISOString(),
            createdAt:this.moment().toISOString()
        }
    ];

    private assingSubject:BehaviorSubject<Assing[]> = new BehaviorSubject(this._assing);
    public assing$ = this.assingSubject.asObservable();

    id:number = this._assing.length+1;
    constructor(){}

    getAssings(){
        return this._assing;
    }

    getAssingsById(id:number){
        return this._assing.find(a => a.id == id);
    }

    getAssingsByIdPerson(id:number){
        return this._assing.find(a => a.id == id);
    }
    getAssingsByIdTask(id:number){
        return this._assing.find(a => a.id == id);
    }

    addAssing(assing:Assing){
        console.log(assing);
        assing.id = this.id++;
        this._assing.push(assing);
    }

    updateAssing(assing:Assing){
        var assignment = this._assing.find(p=>p.id==assing.id);
    
        if(assing){
            assignment.idPerson = assing.idPerson;
            assignment.idTask = assing.idTask;
            assignment.dateTime = assing.dateTime;
            
        }
    }

    deleteAssignById(id:number){
        this._assing = this._assing.filter(p=>p.id != id); 
        this.assingSubject.next(this._assing);
    }
}