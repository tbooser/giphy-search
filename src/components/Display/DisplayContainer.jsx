import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as gifActions from "../../actions/index.js";
import DisplayItem from "./DisplayItem";

class DisplayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    };

    this.displayItemClickHandler = this.displayItemClickHandler.bind(this);
    this.renderGifs = this.renderGifs.bind(this);
  }

  displayItemClickHandler(url) {
    this.props.actions.gifActions.addToFavorites(url);
  }

  renderGifs() {
    let gifArray = [];
    let currentIndex = this.props.gifs.gifList.gifs.length - 1;
    let giphys;
    if (this.props.gifs.gifList.gifs.length > 0) {
      giphys = this.props.gifs.gifList.gifs[currentIndex].response.data;
      giphys.map(gif => {
        return gifArray.push(
          "https://media.giphy.com/media/" + gif.id + "/giphy.gif"
        );
      });
      return gifArray.map(url => {
        return (
          <div key={Math.random()}>
            <DisplayItem
              onClick={() => this.displayItemClickHandler(url)}
              src={url}
            />
          </div>
        );
      });
    }
  }

  render() {
    return <div className="display-container">{this.renderGifs()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    gifs: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      gifActions: bindActionCreators(gifActions, dispatch)
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);
