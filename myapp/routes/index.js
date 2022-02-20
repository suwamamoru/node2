const express = require('express');
const router = express.Router();
const navPages = require('./nav');
const authPages = require('./auth')

router.get('/', function () {});
router.use('/', navPages);
router.use('/', authPages);

module.exports = router;
