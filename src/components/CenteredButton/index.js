import React, { Component } from 'react'

import { button } from './styles.css'

class CenteredHeadline extends Component {
	render() {
		const { pristine, submitting } = this.props;

		return (
			<button
				className={button}
				disabled={pristine || submitting}
			>
				{this.props.children}
			</button>
		)
	}
}

export default CenteredHeadline
