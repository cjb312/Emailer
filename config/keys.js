// Detemining what set of credentials to determine
if (process.env.NODE_ENV === "production") {
	// production - return the production set of keys
	module.exports = require("./prod");
} else {
	// in development - return the dev keys
	module.exports = require("/.dev");
}
