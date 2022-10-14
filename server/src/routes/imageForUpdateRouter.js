const express = require('express');

const router = express.Router();
const multer = require('multer');
const { getImageForUpdate } = require('../controllers/updateImagesControllers');
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
.post(upload.array('file', 10),getImageForUpdate)

module.exports = router;
