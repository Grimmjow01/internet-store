const express = require('express');
const router = express.Router();
const { getUsersLogins } = require('../controllers/usersLoginsController');

router.get('/allLogins', getUsersLogins);

module.exports = router;