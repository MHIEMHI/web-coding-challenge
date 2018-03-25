export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';

export function addToFavorite(data)
{
    return {
        type: ADD_TO_FAVORITE,
        data
    }
}