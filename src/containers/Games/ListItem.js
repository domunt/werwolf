import React, { Component } from 'react'

import { Link } from 'react-router'

import { listItem } from './styles.css'

class ListItem extends Component {
	render() {
		console.log(this);

		return (
			<li className={listItem}>
				<Link
					to={`/game/${this.props.id}`}
					onClick={this.props.onClick}
				>{this.props.children}</Link>
			</li>
		)
	}
}

export default ListItem
