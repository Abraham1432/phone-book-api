const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        //routs
        this.authPath = '/api/auth';
        this.contactPath = '/api/contacts';

        this.conectarDB();
        //middlewares
        this.middlewares();
        //Routr
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

        this.app.use( express.json() );

        // public Access
        this.app.use( express.static('public') );

    }

    routes() {
        
        this.app.use( this.authPath, require('../routes/users'));
        this.app.use( this.contactPath, require('../routes/contacts'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server is running: ', this.port );
        });
    }

}




module.exports = Server;
