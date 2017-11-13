const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

// taking in list of recipients and passing to formatAddresses
class Mailer extends helper.Mail {
	constructor({ subject, recipients }, content) {
		super();

		this.from_email = new helper.Email('no-reply@emailer.com');
		this.subject = subject;
		this.body = new helper.Context('text/html', content);
		this.recipients = this.formatAddresses(recipients);
		// Built in function to call addContent that creates the body
		this.addContent(this.body);
		this.addClickTracking();
		this.addRecipients();
	}

	// for every recepient inside that array we format it with email helper and return it. this.recipients is an array of the new helper.Email
	formatAddresses(recipients) {
		return recipients.map(({email}) => {
			return new helper.Email(email);
		})
	}
	// Straight from sendgrid docs
	addClickTracking() {
		const trackingSettings = new helper.TrackingSettings();
		const clickTracking = new helper.ClickTracking(true, true);

		trackingSettings.setClickTracking(clickTracking);
		this.addTrackingSettings(trackingSettings);
	}
}

module.exports = Mailer;
