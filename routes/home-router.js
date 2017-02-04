var express = require("express");
var router  = express.Router();

router.get("/", function(req, res){
	res.end("Home page");
});


module.exports = router;

