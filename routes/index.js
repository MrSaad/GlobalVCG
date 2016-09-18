var express = require('express');
var compliments = require('../models/compliments');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Global Vehicle Consulting Group LLC' });
});

/* GET compliment page. */
var compliments = compliments.compliments;
router.get('/compliment', function(req, res, next) {
	var randomIndex = Math.floor(Math.random() * compliments.length); 
	res.send(compliments[randomIndex]);
});

/* POST send message */
router.post('/sendmessage', function(req, res, next){
	console.log("received");
});

module.exports = router;
