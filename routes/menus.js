const { Router } = require('express');
const router = Router();

'use strict'

var MenuController = require('../controllers/menus');

router.get('/get', MenuController.get);
router.post('/add', MenuController.add);
router.post('/edit', MenuController.edit);
router.post('/delete', MenuController.delete);

module.exports = router;