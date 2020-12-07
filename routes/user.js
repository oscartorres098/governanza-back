const { Router } = require('express');
const router = Router();

'use strict'

var UserController = require('../controllers/user');
var { verifyToken, isAdmin } = require('../helpers/auth');

router.get('/info', verifyToken, UserController.info);
router.get('/all', isAdmin, UserController.all);
router.post('/add', UserController.add);
router.post('/edit', UserController.edit);
router.post('/delete', UserController.delete);
router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);

module.exports = router;