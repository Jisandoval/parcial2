import {request,response} from "express";
import {manteni} from '../models/manteni';



export class mantenicontrollers{
    public index(req:request, res: response){
        manteni.findALL({})
               .then((manteni:array>) => res.json ())
               .catch((err: error)=> res.status(500).json(err));
    }

    public mostrasjorges(){
        
    }
}
