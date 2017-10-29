const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/user"); // Needs to be executed before passport
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

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

const PORT = process.env.PORT || 3000;
app.listen(PORT);
