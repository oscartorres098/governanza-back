const { Router } = require('express');
const router = Router();

'use strict'

var RolesController = require('../controllers/roles');

router.get('/get', RolesController.get);
router.post('/add', RolesController.add);
router.post('/edit', RolesController.edit);
router.post('/delete', RolesController.delete);

module.exports = router;