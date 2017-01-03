import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'
import games from './containers/Games/reducer';
import settings from './containers/Settings/reducer';

const reducer = combineReducers({
	form,
	games,
	settings
});

export default reducer;
