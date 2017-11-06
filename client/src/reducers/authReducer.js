import {FETCH_USER} from '../actions/types';

// verification  will either be null, user model (action.payload), or false
export default function (state = null, action) {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		default:
			return state;
	}
}