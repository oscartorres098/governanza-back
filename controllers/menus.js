'use strict'

var validator = require('validator');
var fs = require('fs');
var path = require('path');

var Company = require('../models/company');

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
    }

};  // end controller

module.exports = controller;