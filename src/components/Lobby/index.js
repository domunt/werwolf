import React, { Component } from 'react'
import { Link } from 'react-router'

import CenteredHeadline from '../../components/CenteredHeadline'
import { firstPage, lastPage } from './styles.css'

class Lobby extends Component {
	render() {
		return (
			<div>
				<CenteredHeadline>Lobby</CenteredHeadline>
				<Link className={firstPage} to="games">Games</Link>
				<Link className={lastPage} to="settings">Settings</Link>
			</div>
		)
	}
}

export default Lobby
