const sendgrid = require("sendgrid");
const helper = sendgrid.mail;
const keys = require("../config/keys");

// taking in list of recipients and passing to formatAddresses
class Mailer extends helper.Mail {
	constructor({ subject, recipients }, content) {
		super();

		this.sgApi = sendgrid(keys.sendGridKey);
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

	addRecipients() {
		const personalize = new helper.Personalization();
		this.recipients.forEach(recipient => {
			personalize.addTo(recipient);
		});
		this.addPersonilzation(personalize);
	}

	async send() {
		const request = this.sgApi.emptyRequest({
			method: 'POST',
			path: '/v3/mail/send',
			body: this.toJSON()
		});

		const response = this.sgApi.API(request);
		return response;
	}
}

module.exports = Mailer;
