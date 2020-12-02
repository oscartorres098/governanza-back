const { Router } = require('express');
const router = Router();

'use strict'

var UserController = require('../controllers/user');

router.get('/get', UserController.get);
router.post('/add', UserController.add);
router.post('/edit', UserController.edit);
router.post('/delete', UserController.delete);
router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);

module.exports = router;