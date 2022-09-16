const router = require('express').Router();
const multer = require('multer');
const controllers = require ('../controllers/adminAddProductControllers')
const { getProductsAdminProfile } = require('../controllers/adminAddProductControllers')

router
.route('/')
.get(getProductsAdminProfile)

router.post('/', multer().none(), controllers.addProductsAdmin)



module.exports =router;
