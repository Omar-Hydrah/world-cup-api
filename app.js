var express = require("express");
var app     = express();
var session = require("express-session");
var csrf    = require("csurf");
// var morgan    = require("morgan");      
// var passport  = require("passport");     
var cookieParser = require("cookie-parser");
var bodyParser   = require("body-parser");

app.set("view engine", "ejs");
app.use(function(req, res, next){
	res.setHeader("X-Powered-By", "Happy Server");
	console.log(`${req.method} request made to ${req.url}`);
	next();
});


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cookieParser());
// app.use(morgan("dev"));
app.use(session({
	secret: "mysupersecretkey",
	resave         : true,
	saveUninitialized: true
}));
app.use(csrf());


/* Routers */
var apiRouter  = require("./routes/api-router.js");
var homeRouter = require("./routes/home-router.js");

// require("./config/passport.js");
// app.use(passport.initialize());
// app.use(passport.session());

app.use("/api", apiRouter);
app.use("/", homeRouter);

app.listen(80, function(){
	console.log("Listening on port 80.");
});


