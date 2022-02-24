const express = require('express');
const router = express.Router();
const authPages = require('./auth');

router.get('/', function () {});
router.use('/', authPages);

module.exports = router;
