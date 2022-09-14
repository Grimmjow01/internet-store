const express = require('express');

const router = express.Router();
const multer = require('multer');
const { loadImgControllers } = require('../controllers/loadImgControllers');

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
.post(upload.single('file'), loadImgControllers)


module.exports = router;
