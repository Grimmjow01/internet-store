const express = require('express');

const router = express.Router();

const { getProducts, addProducts, deleteProducts, updateProducts} = require('../controllers/productsControllers');

router
.route('/')
.get(getProducts)
.post(addProducts)
.delete(deleteProducts)
.put(updateProducts)

module.exports = router;
