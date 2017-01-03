import React, { Component } from 'react'
import { Link } from 'react-router'

import CenteredHeadline from '../CenteredHeadline'
import { button, container, containerOpen, headline, link, firstLink, lastLink } from './styles.css'

class Menu extends Component {
	constructor(props) {
		super(props);

		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
	}

	componentWillMount() {
		this.setState({
			visible: false
		});
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.hide);
	}

	stopClickPropagation(event) {
		event.nativeEvent.stopImmediatePropagation();
	}

	show() {
		this.setState({
			...this.state,
			visible: true
		});

		document.addEventListener('click', this.hide);
	}

	hide() {
		document.removeEventListener('click', this.hide);

		this.setState({
			...this.state,
			visible: false
		});
	}

	render() {
		console.log(this);

		return (
			<div>
				<button
					ref='menuButton'
					className={button}
					onClick={this.show}
				>
					☰
				</button>
				<div
					ref='menuContainer'
					className={container + (this.state.visible ? ' ' + containerOpen : '')}
					onClick={this.stopClickPropagation}
				>
					<CenteredHeadline level="2" className={headline}>Menu</CenteredHeadline>
					<Link to='/' className={firstLink}>Lobby</Link>
					<Link to='games' className={link}>Games</Link>
					<Link to='settings' className={lastLink}>Settings</Link>
				</div>
			</div>
		)
	}
}

export default Menu
