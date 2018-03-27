import {combineReducers} from 'redux';

import { rdShops } from './shops-reducers.js';
import { rdFavorite } from './favorite-reducer.js';

export default combineReducers({
    rdShops,
    rdFavorite
});