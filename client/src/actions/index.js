import axios from "axios";
import { FETCH_USER } from "./types";

// returning a function that makes a request (dispatch) only after request is complete does an action dispatch
export const fetchUser = () => async dispatch => {
	const res = await axios.get("/api/current_user");

	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
};

export const handleToken = token => async dispatch => {
	const res = await axios.post("/api/stripe", token);

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = values => async dispatch => {
	const res = await axios.post('/api/surveys', values);

	dispatch({type: FETCH_USER, payload:res.data});
};
