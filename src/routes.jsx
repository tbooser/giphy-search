import React from "react";
import { Route } from "react-router-dom";
import App from "./App.js";
import FavoritesContainer from "./components/Favorites/FavoritesContainer.jsx";

export default () => (
	<div>
		<Route exact path="/" component={App} />
		<Route exact path="/favorites" component={FavoritesContainer} />
	</div>
);
