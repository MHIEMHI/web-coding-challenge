
export const SET_SHOPS_DATA = 'SET_SHOPS_DATA';
export const GET_SHOPS_DATA = 'GET_SHOPS_DATA';
export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const ADD_SHOP = 'ADD_SHOP';

export function getShopsData()
{
	return {
		type: GET_SHOPS_DATA
	}
}
export function setShopsData(data)
{
	return{
		type: SET_SHOPS_DATA,
		data
	};
}
export function addShop(data)
{
	return{
		type: ADD_SHOP,
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
