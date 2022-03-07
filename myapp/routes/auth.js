const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { registerValidator } = require('../models/validator');

router.get('/login', authController.getLoginPage);
router.get('/register', authController.getRegisterPage);
router.post('/login', authController.login);
router.post('/register', registerValidator(), authController.register);

module.exports = router;
