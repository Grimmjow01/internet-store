const router = require('express').Router();
const controllers = require ('../controllers/adminAddProductControllers')
const { getProductsAdminProfile } = require('../controllers/adminAddProductControllers')
const multer = require('multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/img');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });


router
.route('/')
.get(getProductsAdminProfile)
.post(upload.array('file', 10), controllers.addProductsAdmin)

module.exports =router;
