import { SET_SHOPS_DATA, GET_SHOPS_DATA, ADD_SHOP } from "../actions/shops-actions";

//Shops Reducer 

const defaultrdShops = { shops: [] };

export function rdShops(state = defaultrdShops, action)
{
	switch (action.type)
	{
		case GET_SHOPS_DATA:
			return state;
		case SET_SHOPS_DATA:
			return Object.assign({}, state, action.data);
		case ADD_SHOP:
			return Object.assign({}, state, { shops: [...state.shops, action.data] });
		default:
			return state;
	}
}