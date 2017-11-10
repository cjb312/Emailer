// Seperate collection from users to avoid hitting the 4mb limit if the email list was super long.

const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./recipient");

const surveySchema = new Schema({
	title: String,
	body: String,
	subject: String,
	recipients: [recipientSchema],
	yes: { type: Number, default:0},
	no: { type: Number, default:0}
	_user: { type: Schema.Types.ObjectId, ref: 'User'},
	dateSent: Date,
	lastResponded: Date

});

mongoose.model("surveys", surveySchema)