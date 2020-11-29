'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanySchema = Schema({
    nombre: String,
    descripcion: String
});

module.exports = mongoose.model('company', CompanySchema);
