'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuSchema = Schema({
    nombre: String,
    opciones: [{
      type: String,
      required: true
    }]
});

module.exports = mongoose.model('menu', MenuSchema);