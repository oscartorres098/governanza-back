'use strict'
const User = require('../models/user');
const jwt = require('jsonwebtoken');
var { decryptr } = require('./crypt');

var helplers = {
  verifyToken: async (req, res, next) => {
		try {
			if (!req.headers.authorization) {
				return res.status(401).send('Unauhtorized Request');
			}
			let bctoken = req.headers.authorization.split(' ')[1];
			const token = decryptr(bctoken);
			if (token === 'null') {
				return res.status(401).send('Unauhtorized Request');
			}
			const payload = await jwt.verify(token, 'palabrota');
			if (!payload) {
				return res.status(401).send('Unauhtorized Request');
			}
			req.userId = payload._id;
			next();
		} catch(e) {
			console.log(e)
			return res.status(401).send('Unauhtorized Request');
		}
	},
	isAdmin: async (req, res, next) => {
		try {
			if (!req.headers.authorization) {
				return res.status(401).send('Unauhtorized Request');
			}
			let bctoken = req.headers.authorization.split(' ')[1];
			const token = decryptr(bctoken);
			if (token === 'null') {
				return res.status(401).send('Unauhtorized Request');
			}
			const payload = await jwt.verify(token, 'palabrota');
			const decoded = jwt.verify(token, "palabrota");  
			var userId = decoded._id;
			var user = await User.findById(userId);
			if (user.rol != "Admin") {
				return res.status(401).send('Unauhtorized Request');
			}
			req.userId = payload._id;
			next();
		} catch(e) {
			console.log(e);
			return res.status(401).send('Unauhtorized Request');
		}
	}
}

module.exports = helplers;