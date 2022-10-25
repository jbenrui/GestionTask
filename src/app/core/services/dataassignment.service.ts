import { Injectable } from '@angular/core';
import { Assing } from '../models/assing.model';

@Injectable({
    providedIn: 'root'
})
export class DataAssingmentService{
    private _assing:Assing[] = [
        {
            id:1,
            idPerson:1,
            idTask:1,
            dateTime:'20/10/2022',
            createdAt: '11:09'

        },
        {
            id:2,
            idPerson:2,
            idTask:2,
            dateTime:'20/10/2022',
            createdAt: '11:11'
        }
    ]

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
}