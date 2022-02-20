const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/dashboard', authController.respondDashboard);

module.exports = router;
