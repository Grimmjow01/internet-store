const express = require('express');

const router = express.Router();

const { productListControllers, deleteProducts, getOneProductForUpdate, updateProducts, producItemController} = require('../controllers/productListControllers');

router
.route('/')
.get(productListControllers)

router
  .get('/:id', producItemController)

router

.route('/:id')
.get(getOneProductForUpdate)
.delete( deleteProducts)
.put( updateProducts)


// router
//   .delete('/:id', deleteProducts)
//   .put(updateProducts)


module.exports = router;
