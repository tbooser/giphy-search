import React, { Component } from "react";
import "./styles/App.css";
import SearchInputContainer from "./components/Search/SearchInputContainer";
import DisplayContainer from "./components/Display/DisplayContainer";
import FavoritesButton from "./components/App/FavoritesButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <FavoritesButton />
        <SearchInputContainer />
        <hr />
        <DisplayContainer />
      </div>
    );
  }
}

export default App;
