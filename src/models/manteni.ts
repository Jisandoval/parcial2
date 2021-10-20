import {nodel, datatypes} from 'sequeleize';
import{database} from "../database/db";

export class manteni extends nodel{

    public nombre!: string;
}

export interface manteni{
    fecha : float ;
    mantenimiento : estrng;
    f o v : estrng;
}

manteni.imit(
    {
        manteni:{
            type: ddtatypes.STRING,
            allowNull: false

        },
    },

    {
        tablemanteni: 'manteni',
        sequeleize: database,
        timestamps: true
    }
);
