'use strict'

const User = require('../models/user');
const jwt = require('jsonwebtoken');
var { cryptr } = require('../helpers/crypt');

var controller = {
  get: async (req, res) => {
    res.status(200).json({ get: "get" });
  },
  info: async (req, res) => {
    var token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, "palabrota");
    var userId = decoded._id
    var user = await User.findById(userId).select({ "email": 1, "nombre": 1, "apellido": 1, "rol": 1, "ultimo_ingreso": 1 });
    delete user.password;
    res.status(200).json(user);
  },
  all: async (req, res) => {
    console.log("users")
    var users = await User.find().select({ "email": 1, "nombre": 1, "apellido": 1, "rol": 1, "ultimo_ingreso": 1 });
    console.log(users)
    res.status(200).json(users);
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
    const { userNombres,
      userApellidos,
      userSys,
      userEmail,
      userPassword,
      userEstado,
      userRolID,
      userLastDate,
      userDateAdd,
      userAvatar,
      confirm_password } = req.body;
    if (userPassword != confirm_password) {
      res.status(400).json({ error: "Las contraseñas no coinciden" });
    }
    const emailUser = await User.findOne({ userEmail: userEmail })
    if (emailUser) {
      res.status(400).json({ error: "El correo ya existe" });
    } else {
      const newUser = new User({ userNombres, userApellidos, userSys, userEmail, userPassword, userEstado, userRolID, userLastDate, userDateAdd, userAvatar });
      await newUser.save();
      const token = await jwt.sign({ _id: newUser._id }, 'palabrota');
      const bctoken = cryptr(token);;
      res.status(200).json({ bctoken, rol: newUser.rol });
    }
  },
  signin: async (req, res) => {
    const { email, password } = req.body;
    var user = await User.findOne({ email });
    if (!user) return res.status(401).send('The email doen\' exists');
    if (user.password !== password) return res.status(401).send('Wrong Password');
    const ahora = new Date();
    await User.findByIdAndUpdate(user._id, { ultimo_ingreso: ahora });
    const token = jwt.sign({ _id: user._id }, 'palabrota');
    const bctoken = cryptr(token);
    return res.status(200).json({ bctoken, rol: user.rol });
  }
};

module.exports = controller;