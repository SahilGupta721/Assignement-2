var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome to Portfolio Backend API. ');
});

router.get('/sahil', function(req, res, next) {
  res.send('Hello, Sahil');
});

module.exports = router;
