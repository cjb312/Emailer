const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send({ hi: "yes" });
});

app.listen(3000);
