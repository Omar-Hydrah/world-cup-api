var express = require("express");
var router  = express.Router();
var africa  = require("../data/2010.json"); // 2010 South Africa world cup

router.get("/", function(req ,res){

	var responseObject = {};
	var routes = ["/teams",
				"/rounds",
				"/rounds/first-round", 
				"/rounds/second-round", 
				"/rounds/third-round", 
				"/rounds/fourth-round",
				"/rounds/final-round",
				"/matches/round-1/team1-team2",
				"/matches/round-2/team1-team2",
				"/matches/round-3/team1-team2",
				"/matches/round-4/team1-team2",
				"/matches/round-5/team1-team2"];

	responseObject.error   = "null";
	responseObject.message = "Api Service - Help"
	responseObject.availableRoutes = routes;

	res.json(responseObject);
});

router.get("/teams", function(req, res){
	var responseObject = {};
	responseObject.error   = "null";
	responseObject.message = "Participating Teams";
	responseObject.teams   = africa.teams;

	res.json(responseObject);
});

/* ------------------------------------- */
/* ------------------------------------- */
/* ----------- Cup Rounds -------------- */
/* ------------------------------------- */
/* ------------------------------------- */


router.get(/^\/rounds\/(first\-round|first\-stage)$/, function(req, res){
	var responseObject     = {};
	responseObject.error   = "null";
	responseObject.message = "First Round / First Stage";
	responseObject.matches = formatMatches(africa.rounds.firstRound);

	res.json(responseObject);
});

router.get(/^\/rounds\/(second\-round|round\-of\-16)$/, function(req, res){
	var responseObject     = {};
	responseObject.error   = "null";
	responseObject.message = "Second Round / Second Stage / Round of 16";
	responseObject.matches = formatMatches(africa.rounds.secondRound);

	res.json(responseObject);
});
router.get(/^\/rounds\/(third\-round|quarter\-finals)$/, function(req, res){
	var responseObject     = {};
	responseObject.error   = "null";
	responseObject.message = "Third Round / Quarter Finals / Round of 8";
	responseObject.matches = formatMatches(africa.rounds.thirdRound);

	res.json(responseObject);
});

router.get(/^\/rounds\/(fourth\-round|semi\-finals)$/, function(req, res){
	var responseObject     = {};
	responseObject.error   = "null";
	responseObject.message = "Fourth Round / Semi Finals / Round of 4";
	responseObject.matches = formatMatches(africa.rounds.fourthRound);

	res.json(responseObject);
});

router.get(/^\/rounds\/(final\-round|finals)$/, function(req, res){
	var responseObject      = {};
	responseObject.error    = "null";
	responseObject.message  = "Final Round";
	responseObject.matches  = formatMatches(africa.rounds.finalRound);
	responseObject.rankings = africa.rankings;

	res.json(responseObject);
});


/* ------------------------------------- */
/* ------------------------------------- */
/* ----------- Cup Matches ------------- */
/* ------------------------------------- */
/* ------------------------------------- */

router.get("/matches", function(req, res){
	var responseObject = {};
	responseObject.error   = "null";
	responseObject.message = "World cup 2010 matches";
	responseObject.matches = africa.rounds;

	res.json(responseObject);
});

router.get("/matches/:round/:firstTeam-:secondTeam", function(req, res){
	var responseObject = {};
	var firstTeam   = req.params.firstTeam;
	var secondTeam  = req.params.secondTeam; 
	var round       = req.params.round;
	var roundNumber = " ";

	switch(round){
		case "round-1":
			roundNumber = "firstRound";
			break;

		case "round-2":
			roundNumber = "secondRound";
			break;

		case "round-3": 
			roundNumber = "thirdRound";
			break;

		case "round-4":
			roundNumber = "fourthRound";
			break;

		case "round-5":
			roundNumber = "finalRound";
			break;
	}

	if(africa.rounds[roundNumber]){
		var match = findMatch(africa.rounds[roundNumber], firstTeam, secondTeam);
		if(!match){
			// A matching match wasn't found
			responseObject.error   = "404";
			responseObject.message = "Match not found. Visit localhost/api/teams to see the list of teams.";

			res.json(responseObject);
		}else{
			// A match was found.
			responseObject.error   = "null";
			responseObject.message = "World cup match";
			responseObject.match   = match;

			res.json(responseObject);
		}

	}else{
		responseObject.error   = "404";
		responseObject.message = "Round/Stage not found";

		res.json(responseObject);
	}

});


/* Not Found Handler */
router.use(function(req ,res){
	var responseObject = {
		error: "404",
		message: "Please Visit home page: localhost/api/ "
	}
	res.json(responseObject);
});

function formatMatches(matches){
	var formattedMatches = matches.map(function(match, index){
		if(match.winner){
			return `${match.teams[0]} vs ${match.teams[1]} : ${match.result} (${match.winner})`;
		}else{
			return `${match.teams[0]} vs ${match.teams[1]} : ${match.result}`;
		}
	});
	return formattedMatches;
}

function findMatch(matches, firstTeam, secondTeam){
	var match;

	for(var i = 0; i < matches.length; i++){
		if(    matches[i].teams.toString().toLowerCase().indexOf(firstTeam.toLowerCase()) != -1 
			&& matches[i].teams.toString().toLowerCase().indexOf(secondTeam.toLowerCase()) != -1){
			match = matches[i];
		}
	}
	if(! match){
		return false;
	}else{
		return match;
	}
}


/*router.get("/match/:firstTeam/:secondTeam", function(req, res){
	var firstTeam  = req.params.firstTeam;
	var secondTeam = req.params.secondTeam;
	
	// Making sure that both teams are in the tournament
	if(africa.teams.toString().toLowerCase().indexOf(firstTeam) != -1 &&
	 	africa.teams.toString().toLowerCase().indexOf(secondTeam) != -1 ){
		// Team is in the competition
		

	}else{
		res.json({"error": "team not found"});
	}
	res.end(`Match`);
});
*/


module.exports = router;