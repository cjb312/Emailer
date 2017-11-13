const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

class Mailer extends helper.Mail {
	constructor({ subject, recipients }, content) {
		super();

		this.from_email = new helper.Email('no-reply@emailer.com');
		this.subject = subject;
		this.body = new helper.Context('text/html', content);
		this.recipients = this.formatAddresses(recipients);
	}
}

module.exports = Mailer;
