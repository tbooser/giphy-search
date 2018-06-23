import { combineReducers } from "redux";
import gifList from "./gifReducer";
import addToFavorites from "./addToFavorites";

export default combineReducers({
	gifList,
	addToFavorites
});
