const express = require('express');
const router = express.Router();
const authPages = require('./auth');
const navPages = require('./nav');

router.use('/', navPages);
router.use('/', authPages);

module.exports = router;
