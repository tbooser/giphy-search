import { RECEIVE_GIFS } from "../constants";

const gifState = {
  gifs: []
};

function gifList(state = gifState, action) {
  switch (action.type) {
    case RECEIVE_GIFS:
      return Object.assign(
        {},
        {
          gifs: [
            ...state.gifs,
            {
              response: action.response
            }
          ]
        }
      );
    default:
      return state;
  }
}

export default gifList;
