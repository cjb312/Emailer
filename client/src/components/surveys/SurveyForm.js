// SurveyForm shows a form for user to add inpt
import React, { Component } from "react";
import { reduxFrom } from "redux-form";

class SurveyForm extends Component {
	render() {
		return <div>SurveyForm!</div>;
	}
}

export default reduxForm({
	form: 'SurveyForm'
}) (SurveyForm);
