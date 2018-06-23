import React, { Component } from "react";

class FavoritesItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="favorites-item">
        <img src={this.props.src} />
      </div>
    );
  }
}

export default FavoritesItem;
