const express = require('express');
const router = express.Router();
const { addRating, getRating } = require('../controllers/ratingController');

router.get('/getrating', getRating);
router.patch('/addrating', addRating);

module.exports = router;