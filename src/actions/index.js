import { RECEIVE_GIFS, ADD_TO_FAVORITES } from "../constants.js";

export const receiveGifs = response => {
	return dispatch => {
		dispatch({ response, type: RECEIVE_GIFS });
	};
};

export const sendGiphyRequest = term => {
	return dispatch => {
		fetch(
			"https://api.giphy.com/v1/gifs/search?api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=" +
				term
		)
			.then(response => {
				return response.json();
			})
			.then(response => {
				dispatch(receiveGifs(response));
			});
	};
};

export const addToFavorites = url => {
	return dispatch => {
		dispatch({ url, type: ADD_TO_FAVORITES });
	};
};
