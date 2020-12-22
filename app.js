'use strict'

// Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express (http)
var app = express();

// Cargar ficheros rutas
var user_routes = require('./routes/user');

// Middlewares 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//Jajajajajajajja
app.use("/user", user_routes);
app.get("/", (req, res) => {
    return res.status(200).send({
        status: "success",
        message: "hola"
    });
});

// Exportar modulo (fichero actual)
module.exports = app;