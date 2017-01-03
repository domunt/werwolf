import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import CenteredButton from '../../components/CenteredButton'
import { lastLabel, input } from './styles.css'

class SettingsForm extends Component {
	render() {
		console.log(this);

		const { onSubmit, pristine, submitting } = this.props;

		return (
			<form onSubmit={onSubmit}>
				<label className={lastLabel}>
					Name
					<Field
						className={input}
						name='name'
						component='input'
						type='text'
						required='true'
					/>
				</label>
				<CenteredButton pristine={pristine} submitting={submitting}>Save</CenteredButton>
			</form>
		);
	}
}

export default reduxForm({
	form: 'settings'
})(SettingsForm);
