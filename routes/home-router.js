var express = require("express");
var router  = express.Router();
var data    = require("../data/2010.json");

router.get("/", function(req, res){
	res.render("home", 
		{title: "World Cup Results", data: data}
	);
});


module.exports = router;