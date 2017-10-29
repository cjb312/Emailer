const passport = require("passport");

module.exports = app => {
	// Passport authenticates user coming in on this route usuing strategy called google.
	// The strategy from the string google stems from GoogleStrategy above.
	app.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"]
		})
	);

	// The googleStrategy will handle the request differently will exchange the code for the actual user profile
	app.get("/auth/google/callback", passport.authenticate("google"));

	// Taking cookie and killing it
	app.get("/api/logout", (req, res) => {
		req.logout();
		res.send(req.user);
	});

	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});
};
