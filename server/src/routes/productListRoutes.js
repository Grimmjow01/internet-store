const express = require('express');

const router = express.Router();

const { productListControllers, deleteProducts, getOneProductForUpdate, updateProducts, producItemController} = require('../controllers/productListControllers');

router
.route('/')
.get(productListControllers)

router

.route('/:id')
.get(getOneProductForUpdate)
.delete( deleteProducts)
.put( updateProducts)

router
  .get('/:id', producItemController)

// router
//   .delete('/:id', deleteProducts)
//   .put(updateProducts)


module.exports = router;
