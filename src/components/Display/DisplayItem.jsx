import React, { Component } from "react";

class DisplayItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.url);
  }

  render() {
    return (
      <div className="display-item" onClick={this.handleClick}>
        <img src={this.props.src} />
      </div>
    );
  }
}

export default DisplayItem;
