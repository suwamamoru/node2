const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validator } = require('../models/validator');

router.get('/login', authController.respondLogin);
router.get('/register', authController.respondRegister);
router.post('/dashboard', validator(), authController.respondDashboard);

module.exports = router;
