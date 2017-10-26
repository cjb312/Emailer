const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

//1 arg = trying to fetch from mongoose, 2 args = trying load into mongoose
const User = mongoose.model("users");

//Creating new instance of google passport strategy. Passing callback url for once user sign in is complete
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback"
		},
		(accessToken, refreshToken, profile, done) => {
			// Preventing have the same profile ID save into the database so there will be only one model instance of an ID
			User.findOne({ googleId: profile.id }).then(existingUser => {
				if (existingUser) {
					//we already have a record with the given profile ID
					done(null, existingUser);
				} else {
					//we dont have a record with this ID, make a new record
					new User({ googleId: profile.id })
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);
