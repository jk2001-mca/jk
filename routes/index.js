var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ANJAC', name:'jeyakumar',rollno:'21pa116' });
});

module.exports = router;
