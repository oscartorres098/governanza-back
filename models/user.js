'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: String,
    password: String, 
    rol: String,
    nombre: String,
    apellido: String,
    ultimo_ingreso: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);