export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const DELETE_FROM_FAVORITE = 'DELETE_FROM_FAVORITE';

export function addToFavorite(data)
{
    return {
        type: ADD_TO_FAVORITE,
        data
    }
}

export function deleteFromFavorite(data)
{
    return {
        type: DELETE_FROM_FAVORITE,
        data
    }
}