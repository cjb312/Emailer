const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate =require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model("surveys");

module.exports = app => {
	app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
		const { title, subject, body, recipients } = req.body;

		const survey = new Survey({
			title,
			subject,
			body,
			// Takes the recipients emails splits the string of emails after each comma and maps them to an array of objects of email: asdfadf@gasdf.com
			recipients: recipients
				.split(",")
				.map(email => ({ email: email.trim() })),
			_user: req.user.id,
			dateSent: Date.now()
		});
		// first survey obj has subject and recipients. second survey will be the html to use inside the email
		const mailer = new Mailer(survey, surveyTemplate(survey));

	});
};
