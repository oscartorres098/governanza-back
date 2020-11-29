const { Router } = require('express');
const router = Router();

'use strict'

var CompanyController = require('../controllers/company');

router.get('/get', CompanyController.get);
router.post('/add', CompanyController.add);
router.post('/edit', CompanyController.edit);
router.post('/delete', CompanyController.delete);

module.exports = router;