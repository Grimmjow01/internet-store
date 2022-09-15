const express = require('express');

const router = express.Router();

const { productListControllers, addProducts, deleteProducts, updateProducts} = require('../controllers/productListControllers');

router
.route('/')
.get(productListControllers)
.post(addProducts)

router
  .delete('/:id', deleteProducts)
  .put(updateProducts)

module.exports = router;
