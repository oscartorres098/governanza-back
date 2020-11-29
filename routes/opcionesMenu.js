const { Router } = require('express');
const router = Router();

'use strict'

var OptController = require('../controllers/opcionesMenu');

router.get('/get', OptController.get);
router.post('/add', OptController.add);
router.post('/edit', OptController.edit);
router.post('/delete', OptController.delete);

module.exports = router;