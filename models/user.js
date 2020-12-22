'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    userNombres: String,
    userApellidos: String,
    userSys: String,
    userEmail: String,
    userPassword: String,
    userEstado: Boolean,
    userRolID : String,
    userLastDate: String,
    userDateAdd: String,
    userAvatar: String
}, {
    timestamps: true
});

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);