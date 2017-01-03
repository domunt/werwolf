import { JOIN_GAME } from './actions';

const initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case JOIN_GAME:
			console.info('Join game', action.id);

			return state;

		default:
			return state;
	}
};

export default reducer;
