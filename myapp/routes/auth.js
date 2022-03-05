const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { registerValidator } = require('../models/validator');

router.post('/loginDashboard', authController.login);
router.post('/registerDashboard', registerValidator(), authController.register);

module.exports = router;
