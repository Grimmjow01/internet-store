const express = require('express');

const router = express.Router();

const { productListControllers, deleteProducts, updateProducts} = require('../controllers/productListControllers');

router
.route('/')
.get(productListControllers)

router
  .delete('/:id', deleteProducts)
  .put(updateProducts)

module.exports = router;
