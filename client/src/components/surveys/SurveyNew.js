//SurveyNew shows SurveyFrom
import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
	/*constructor(props) {
		super(props);

		this.state = { new: true };
	}*/
	//shortcut for above
	state = { showReview: false };
	// ShowFormReview being set to false either initally brings up the new survey page or when reviewing it is set to false onCancel so the user can navigate back
	renderContent() {
		if (this.state.showFormReview === true) {
			return <SurveyFormReview
				onCancel={()=>this.setState({showFormReview: false}) }
			 />;
		}

		return <SurveyForm onSurveySubmit={() => this.setState({showFormReview:true})} />;
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

export default SurveyNew;
