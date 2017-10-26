const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/user"); // Needs to be executed before passport
require("./services/passport");


mongoose.connect(keys.mongoURI);

const app = express();
// Requiring this returns a function that is immediately calls it with app
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
