const express = require('express');

const router = express.Router();

const { productListControllers, addProducts, deleteProducts, updateProducts} = require('../controllers/productListControllers');

router
.route('/')
.get(productListControllers)
.post(addProducts)
.delete(deleteProducts)
.put(updateProducts)

module.exports = router;
