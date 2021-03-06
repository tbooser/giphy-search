import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import combineReducers from "./reducers/index.js";
import Routes from "./routes";
import ReduxThunk from "redux-thunk";

const store = createStore(combineReducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Routes />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
