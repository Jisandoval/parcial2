const sequelize = require('sequelize');
 const BD_NAME = 'DB_JORGES';
 const DB_USER = 'JORGES';
 const DB_PASS = 'JORGE12345';

export const database = new sequelize(
    DB_NAME.
    DB_USER,
    DB_PASS, 

    {
        host 'localhost',
        dialect 'mysql',
        port 3306
    }
);

database.sync( {froce: true})
    .then(function ()){
        console.log('base de datos creada');
        
    }