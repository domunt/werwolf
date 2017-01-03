import React, { Component } from 'react'

import { headline } from './styles.css'

class CenteredHeadline extends Component {
	customClassName = headline + (this.props.className ? ' ' + this.props.className : '');

	render() {
		switch (parseInt(this.props.level || 1, 10)) {
			case 2:
				return <h2 className={this.customClassName}>{this.props.children}</h2>;

			case 3:
				return <h3 className={this.customClassName}>{this.props.children}</h3>;

			case 4:
				return <h4 className={this.customClassName}>{this.props.children}</h4>;

			case 5:
				return <h5 className={this.customClassName}>{this.props.children}</h5>;

			case 6:
				return <h6 className={this.customClassName}>{this.props.children}</h6>;

			default:
				return <h1 className={this.customClassName}>{this.props.children}</h1>;
		}
	}
}

export default CenteredHeadline
