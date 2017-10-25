const express = require("express");
require("./services/passport");

const app = express();
// Requiring this returns a function that is immediately calls it with app
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
