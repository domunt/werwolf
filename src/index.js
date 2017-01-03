import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'

import reducer from './reducer'
import App from './components/App'

import './styles.css'

// Get the client state from the server here
const serverState = {
	games:[
		{
			id: 42,
			title: 'First Game'
		},
		{
			id: 21,
			title: 'Second Game'
		}
	],
	settings: {
		id: localStorage.getItem('id'),
		name: localStorage.getItem('name')
	}
	// activePage: LOBBY_PAGE_NAME
};

let store = createStore(reducer, serverState);

render(
	<App store={store} />,
	document.getElementById('root')
);
