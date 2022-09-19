const express = require('express');

const router = express.Router();


const { productListControllers,getOneProductForUpdate, deleteProducts, updateProducts} = require('../controllers/productListControllers');

const { productListControllers, deleteProducts,getOneProductForUpdate, updateProducts, producItemController} = require('../controllers/productListControllers');

router
.route('/')
.get(productListControllers)

router

.route('/:id')
.get(getOneProductForUpdate)
.delete( deleteProducts)
.put( updateProducts)

  .get('/:id', producItemController)

router
  .delete('/:id', deleteProducts)
  .put(updateProducts)


module.exports = router;
