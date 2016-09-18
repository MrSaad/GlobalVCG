var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Global Vehicle Consulting Group LLC' });
});

var compliments = ["You're doing great!",
					"Keep it up dude!",
					"You're an awesome person!"]

/* GET compliment page. */
router.get('/compliment', function(req, res, next) {
	var randomIndex = Math.floor(Math.random() * compliments.length); 
	res.send(compliments[randomIndex]);
});

/* POST send message */
router.post('/sendmessage', function(req, res, next){
	console.log("received");
});

module.exports = router;
