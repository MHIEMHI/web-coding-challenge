import { SET_SHOPS_DATA } from "../actions/shops-actions";

//Shops Reducer 

const defaultrdShops = {shops: {}};
export function rdShops(state = defaultrdShops, action)
{
    switch (action.type)
	{
		case SET_SHOPS_DATA:
			return Object.assign({}, state, action.data );
		default:
			return state;
	}
}