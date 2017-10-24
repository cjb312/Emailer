const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();
// clientId 1001015389641-4jsrfs4l59f33r3f8k4pb3r3co11qrom.apps.googleusercontent.com
// clientSecret xryaATPX9eFFF7ccGciI7WYG

//Creating new instance of google passport strategy
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 3000;
app.listen(PORT);
