import { ADD_TO_FAVORITES } from "../constants";

const favoritesState = {
  favorites: []
};

function addToFavorites(state = favoritesState, action) {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return Object.assign(
        {},
        {
          favorites: [
            ...state.favorites,
            {
              url: action.url
            }
          ]
        }
      );
    default:
      return state;
  }
}

export default addToFavorites;
