const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const { registerValidator } = require('../models/validator');

router.post('/dashboard', registerValidator(), registerController.register);

module.exports = router;