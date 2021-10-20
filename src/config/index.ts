import express, {application} from "express";
import morgn from 'morgn';
import {Routes} from '../Routes/index';


export class app {
    app:application;

    constructor(
        private port?: nunver string
    ){
        this.app = express();
        this.settings();
        this.middlerwares();
        this.routes();
    }

    private routes(){
        this.routeprv.manteniRoutes.routes(this.app)
    }

    private settings();{
        this.app.set('port', this.port 3000)
    }

    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('server on port',this.app.get('port'));
        
    }
    private middloreares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended}));
    }
}