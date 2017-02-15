var express = require("express");
var router  = express.Router();

var southAfrica = require("../data/2010.json");

router.get("/", function(req, res){
	res.json("{'error': 'null'}");
});

router.get("/teams", function(req ,res){

});

router.get("/match/:firstTeam/:secondTeam", function(req, res){

});

module.exports = router;

