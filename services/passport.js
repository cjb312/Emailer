const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

//1 arg = trying to fetch from mongoose, 2 args = trying load into mongoose
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
	done(null, user.id); // user.id is making use of the id of the record that's assinged by mongo
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

// Creating new instance of google passport strategy.
// If a user is already in the database their token will be matched with the id upon sign in otherwise a new token is created for a new user
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true // Tells google if the request runs into proxy issues its fine, trust it for callback url to work correctly
		},
		async (accessToken, refreshToken, profile, done) => {
			// Preventing have the same profile ID save into the database so there will be only one model instance of an ID
			const existingUser = await User.findOne({ googleId: profile.id });
			if (existingUser) {
				//we already have a record with the given profile ID
				return done(null, existingUser);
			}
			//we dont have a record with this ID, make a new record
			const user = await new User({ googleId: profile.id }).save();
			done(null, user);
		}
	)
);
