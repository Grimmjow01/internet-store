const express = require('express');

const router = express.Router();

const { productListControllers, deleteProducts, updateProducts, producItemController} = require('../controllers/productListControllers');

router
.route('/')
.get(productListControllers)

router
  .get('/:id', producItemController)

router
  .delete('/:id', deleteProducts)
  .put(updateProducts)

module.exports = router;
