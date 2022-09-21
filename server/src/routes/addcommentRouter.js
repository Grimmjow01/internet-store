const express = require('express');
const router = express.Router();
const { addcommentControlles, getcommentControlles } = require('../controllers/addcommentControlles');

router.post('/:id', addcommentControlles);
router.get('/:id', getcommentControlles);

module.exports = router;
