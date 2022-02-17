const express = require('express');
const router = express.Router();
const transitionController = require('../controllers/transitionController');

router.get('/login', transitionController.respondLogin);
router.get('/register', transitionController.respondRegister);
router.get('/dashboard', transitionController.respondDashboard);

module.exports = router;
