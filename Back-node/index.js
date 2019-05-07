'use strict'

let mongoose = require('mongoose');
let app = require('./app')
let port = 3700;

//Hacemos la peticion asincronas
mongoose.Promise = global.Promise;
//conectamos a la bd
mongoose.connect('mongodb://localhost:27017/valorescell', { useNewUrlParser: true}) 
        .then(() => {
            console.log("Conexion a la base de datos establecida con exito");

            // Creacion del servidor
            app.listen(port, () => {
              console.log("Servidor corriendo correctamente");
            })
        })
        .catch(err => console.log(err));