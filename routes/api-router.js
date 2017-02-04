var express = require("express");
var router  = express.Router();
var africa  = require("../data/2010.json"); // 2010 South Africa world cup


router.get("/", function(req ,res){
	res.end("Api Service");
});

router.get("/match/:firstTeam/:secondTeam", function(req, res){
	var firstTeam  = req.params.firstTeam;
	var secondTeam = req.params.secondTeam;
	
	/* Making sure that both teams are in the tournament */
	if(africa.teams.toString().toLowerCase().indexOf(firstTeam) != -1 &&
	 	africa.teams.toString().toLowerCase().indexOf(secondTeam) != -1 ){
		// Team is in the competition
		

	}else{
		res.json({"error": "team not found"});
	}
	res.end(`Match`);
});

router.get("/teams", function(req, res){
	res.json(africa.teams);
});


module.exports = router;