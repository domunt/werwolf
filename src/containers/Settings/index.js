import React, { Component } from 'react'
import { connect } from 'react-redux'

import Menu from '../../components/Menu'
import CenteredHeadline from '../../components/CenteredHeadline'
import Form from './Form'
import { changeName } from './actions'
import { firstLabel, plain } from './styles.css'

class Settings extends Component {
	render() {
		console.log(this);

		return (
			<div>
				<Menu currentPath={this.props.currentPath} />
				<CenteredHeadline>Settings</CenteredHeadline>
				<label className={firstLabel}>
					ID
					<span className={plain}>{this.props.settings.id}</span>
				</label>
				<Form initialValues={this.props.settings} onSubmit={this.props.onSubmit} />
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		settings: state.settings,
		currentPath: ownProps.route.path
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit: (event) => {
			event.preventDefault();

			dispatch(changeName(event.target.name.value))
		}
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Settings)
