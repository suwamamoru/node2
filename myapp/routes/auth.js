const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.respondLogin);
router.get('/register', authController.respondRegister);

module.exports = router;
