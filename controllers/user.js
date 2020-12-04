'use strict'

const User = require('../models/user');
const jwt = require('jsonwebtoken');

var controller = {

  get: async (req, res) => {
    res.status(200).json({ get: "get" });
  },
  info: async (req, res) => {
    var token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, "secretkey");  
    var userId = decoded._id
    var user = await User.findById(userId);
    delete user.password;
    res.status(200).json( user );
  },
  add: async (req, res) => {
    res.status(200).json({ add: "add" });
  },
  edit: async (req, res) => {
    res.status(200).json({ edit: "edit" });
  },
  delete: async (req, res) => {
    res.status(200).json({ delete: "delete" });
  },

  signup: async (req, res) => {
    const { email, password, rol, nombre, apellido, ultimo_ingreso} = req.body;
    const newUser = new User({ email, password, rol, nombre, apellido, ultimo_ingreso });
    await newUser.save();
    const token = await jwt.sign({ _id: newUser._id }, 'secretkey');
    res.status(200).json({ token, rol: newUser.rol });
  },

  signin: async (req, res) => {
    const { email, password} = req.body;

    var user = await User.findOne({ email });
    if (!user) return res.status(401).send('The email doen\' exists');
    if (user.password !== password) return res.status(401).send('Wrong Password');
    const ahora = new Date();
    console.log(ahora)
    await User.findByIdAndUpdate(user._id, { ultimo_ingreso: ahora })
    const token = jwt.sign({ _id: user._id }, 'secretkey');
    return res.status(200).json({ token, rol: user.rol });
  }
};  // end controller

module.exports = controller;