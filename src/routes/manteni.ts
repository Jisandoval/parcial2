import {requeset, response,application} from "express";
import {mantenicontroller} from '../controllers/manteni.controllers';

export class manteniroutes{
    public mantenicontroller: mantenicontroller = mantenicontroller();

    public routes(app: application): void{
        app.routes('.manteni').get(this.mantenicontroller.index);
    }
 
 }  





