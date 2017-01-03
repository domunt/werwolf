export const JOIN_GAME = 'JOIN_GAME';

export function joinGame(id) {
	return {
		type: JOIN_GAME,
		id
	}
}
