
export const SET_SHOPS_DATA = 'SET_SHOPS_DATA';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';

export function setShopsData(data)
{
	return{
		type: SET_SHOPS_DATA,
		data
	};
}

export function addToFavorites(data)
{
	return{
		type: ADD_TO_FAVORITE,
		data
	};
}
