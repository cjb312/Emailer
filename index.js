const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

//Creating new instance of google passport strategy. Passing callback url for once user sign in is complete
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback"
		},
		accessToken => {
			console.log(accessToken);
		}
	)
);

// Passport authenticates user coming in on this route usuing strategy called google.
// The strategy from the string google stems from GoogleStrategy above.
app.get(
	"/auth/google",
	passport.authenticate("google", {
		scope: ["profile", "email"]
	})
);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
