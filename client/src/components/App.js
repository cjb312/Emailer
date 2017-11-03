import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>dashboard</h2>
const Survery = () => <h2>survery</h2>
const Landing = () => <h2>landing</h2>

const App = () => {
	return(
	<div>
		<BrowserRouter>
			<div>
				<Route path="/" component={Landing} />
			</div>
		</BrowserRouter>
	</div>
	);
};

export default App;
