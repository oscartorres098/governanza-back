'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CompanySchema = Schema({
    nombre: String,
    usuarios: [{
        type: String,
        required: true
      }]
});

module.exports = mongoose.model('company', CompanySchema);
