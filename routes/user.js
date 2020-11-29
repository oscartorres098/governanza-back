const { Router } = require('express');
const router = Router();

'use strict'

var UserController = require('../controllers/user');

router.get('/get', RolesController.get);
router.post('/add', RolesController.add);
router.post('/edit', RolesController.edit);
router.post('/delete', RolesController.delete);
router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);

module.exports = router;