import { ADD_TO_FAVORITE } from "../actions/favorite-actions";

const defaultrdFavorite = { shops: [] };

export function rdFavorite(state = defaultrdFavorite, action)
{
	switch (action.type)
	{
		case ADD_TO_FAVORITE:
			return Object.assign({}, state, { shops: [...state.shops, action.data] });
		default:
			return state;
	}
}