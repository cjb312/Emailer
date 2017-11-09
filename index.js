const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/user"); // Needs to be executed before passport
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

// Telling express it needs to make use of cookies inside the app
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days * 24 hrs in a day * 60 min in an hour * 60 sec in a min * 1000ms to a second
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());

app.use(passport.session());

// Requiring this returns a function that is immediately calls it with app
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

// order of operations important here if the request can't be met it will just serve up index.html
if (process.env.NODE_ENV === "production") {
	// Express will serve up production assets
	app.use(express.static(path.join(__dirname, 'client/build')));

	// Express will serve up the index.html file if it doesn't recognize the route
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 8080;
app.listen(PORT);
