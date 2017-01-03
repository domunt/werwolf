import React, { Component } from 'react'
import { connect } from 'react-redux'

import CenteredHeadline from '../../components/CenteredHeadline'

class Game extends Component {
	render() {
		console.log(this);

		const { id } = this.props.game;

		return (
			<div>
				<CenteredHeadline>Game {id}</CenteredHeadline>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = parseInt(ownProps.params.id, 10);
	const games = state.games;
	const gamesLength = games.length;
	let i = 0;
	let game = {};

	for (; i < gamesLength; ++i) {
		if(games[i].id === id) {
			game = games[i];
			break;
		}
	}

	return {
		game: game
	}
};

const mapDispatchToProps = (dispatch) => {
	return {}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Game)
