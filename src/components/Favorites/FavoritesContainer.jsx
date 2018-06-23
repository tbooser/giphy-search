import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as gifActions from "../../actions/index.js";
import FavoritesItem from "./FavoritesItem";
import FavoritesButton from "../App/HomeButton";

class FavoritesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: ""
    };
    this.renderGifs = this.renderGifs.bind(this);
  }

  renderGifs() {
    let gifArray = [];
    let favorites = this.props.favoritesState.addToFavorites.favorites;
    return favorites.map(favorite => {
      return (
        <div key={Math.random()}>
          <FavoritesItem src={favorite.url} />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <FavoritesButton />
        <div className="favorites-container">{this.renderGifs()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favoritesState: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      gifActions: bindActionCreators(gifActions, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
