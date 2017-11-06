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

	// After sucessful sign in the redirect function dumps the user off at the surveys route
	app.get(
		"/auth/google/callback",
		passport.authenticate("google"),
		(req, res) => {
			res.redirect("/surveys");
		}
	);

	// Taking cookie and killing it
	app.get("/api/logout", (req, res) => {
		req.logout();
		res.redirect("/");
	});

	// Responding with the current user signed in
	app.get("/api/current_user", (req, res) => {
		res.send(req.user);
	});
};
