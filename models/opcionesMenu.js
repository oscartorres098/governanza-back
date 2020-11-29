'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OptMenuSchema = Schema({
    nombre: String,
    ruta: String
});

module.exports = mongoose.model('optMenu', OptMenuSchema);
// companys --> guarda documentos de este tipo y con estructura dentro de la colección