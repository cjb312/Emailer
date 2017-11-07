import 'materialize-css/dist/css/materialize.min.css';
import React from "react";
import ReactDOM from "react-dom";
import reduxThunk from 'redux-thunk';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
console.log('stripe key:', process.env.REACT_APP_STRIPE_KEY);
console.log('Env is:', process.env.NODE_ENV);