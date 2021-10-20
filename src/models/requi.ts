import {nodel, datatypes} from 'sequeleize';
import{database} from "../database/db";

export class requi extends nodel{

    public nombre!: string;
}

export interface requi{
    marca : estrng;
    modelo : estrng;
    

}

requi.imit(
    {
        requi:{
            type: ddtatypes.STRING,
            allowNull: false

        },
    },

    {
        tablerequi: 'requi',
        sequeleize: database,
        timestamps: true
    }
);
