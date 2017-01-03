import { CHANGE_NAME } from './actions';

const initialState = {};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_NAME:
			console.log('action', action.type, state, action);

			localStorage.setItem('name', action.name);

			return {
				...state,
				name: action.name
			};

		default:
			return state;
	}
};

export default reducer;
