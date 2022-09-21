const express = require('express');
const router = express.Router();
const { getTypesController } = require('../controllers/typesAddController');

router.get('/types', getTypesController);

module.exports = router;