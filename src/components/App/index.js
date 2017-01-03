import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import Lobby from '../Lobby'
import Games from '../../containers/Games'
import Game from '../../containers/Game'
import Settings from '../../containers/Settings'

const App = ({ store }) => (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Lobby} />
			<Route path="/games" component={Games} />
			<Route path="/game/:id" component={Game} />
			<Route path="/settings" component={Settings} />
		</Router>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired,
};

export default App;
