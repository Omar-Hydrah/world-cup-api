var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

passport.serializeUser(function(user, done){
	done(null, user.id);
});

passport.deserializeUser(function(id, done){
	// User.findById(id, function(err, user){ done(err, user)});
});


passport.use("local.signin", new LocalStrategy({
	usernameField: "email",
	passwordField: "password",
	passReqToCallBack: true
}, function(req, email, password, done){
	
}));