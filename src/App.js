import React from "react";
import { Header } from "./component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";

function App() {
	return (
		<Router>
			<div>
				<Header></Header>
				<Switch>
					{routes.map((route) => (
						<Route
							key={route.path}
							path={route.path}
							exact={route.exact}
							component={route.component}
						></Route>
					))}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
