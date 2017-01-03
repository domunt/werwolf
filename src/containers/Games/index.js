import React, { Component } from 'react'
import { connect } from 'react-redux'

import CenteredHeadline from '../../components/CenteredHeadline'
import Menu from '../../components/Menu'
import { joinGame } from './actions'
import List from './List'

class Games extends Component {
	render() {
		console.log(this);

		return (
			<div>
				<Menu />
				<CenteredHeadline>
					Games
				</CenteredHeadline>
				<List items={this.props.games} onItemClick={this.props.handleItemClick} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		games: state.games
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleItemClick: (id) => {
			dispatch(joinGame(id))
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Games)
