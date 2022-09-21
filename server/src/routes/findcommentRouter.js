const {sendEmail} = require("../controllers/contactsController")
const router = require('express').Router();

const { findcommentControllers } = require('../controllers/findcommentControllers')

router.get("/:id", findcommentControllers);

module.exports =router;
