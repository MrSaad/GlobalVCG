var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Global Vehicle Consulting Group LLC' });
});

/* POST send message */
router.post('/sendmessage', function(req, res, next){
	console.log("received");
});

module.exports = router;
