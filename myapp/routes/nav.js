const express = require('express');
const router = express.Router();
const navController = require('../controllers/navController');

router.get('/login', navController.respondLogin);
router.get('/register', navController.respondRegister);

module.exports = router;
