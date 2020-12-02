'use strict'

const User = require('../models/user');
const jwt = require('jsonwebtoken');

var controller = {

  get: async (req, res) => {
    res.status(200).json({ get: "get" });
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

    const user = await User.findOne({ email });
    if (!user) return res.status(401).send('The email doen\' exists');
    if (user.password !== password) return res.status(401).send('Wrong Password');

    const token = jwt.sign({ _id: user._id }, 'secretkey');
    return res.status(200).json({ token, rol: user.rol });
  }
};  // end controller

module.exports = controller;