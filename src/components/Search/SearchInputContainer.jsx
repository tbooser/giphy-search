import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as gifActions from "../../actions/index.js";

class SearchInputContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchTerm: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.sendGiphyRequest = this.sendGiphyRequest.bind(this);
	}

	componentDidMount() {}

	handleChange(event) {
		this.setState({ searchTerm: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		event.target.reset();
		this.setState({ searchTerm: "" });
		this.sendGiphyRequest(this.state.searchTerm);
	}

	sendGiphyRequest(term) {
		this.props.actions.gifActions.sendGiphyRequest(term);
	}

	render() {
		return (
			<div className="search-input-container">
				<i className="far fa-heart" />
				<h1>Giphy Search</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						<input
							className="search-input-box"
							id="input-box"
							type="text"
							value={this.state.searchTerm}
							onChange={this.handleChange}
							autoComplete="off"
						/>
					</label>
					<span className="submit-button-container">
						<input
							type="submit"
							value="Search"
							className="search-input-submit-button"
						/>
					</span>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		app: state
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: {
			gifActions: bindActionCreators(gifActions, dispatch)
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(
	SearchInputContainer
);
