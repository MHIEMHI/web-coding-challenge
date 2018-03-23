'use strict'
import { applyMiddleware, createStore } from 'redux';
import { reducer } from 'redux-storage';
import reducers from './reducers/index.js';
import createLogger from 'redux-logger';

import thunkMiddleware from 'redux-thunk';
import { setShopsData } from './actions/shops-actions.js';

// Middleware, storage, logger etc.
var loggerMiddleware = null;

var store = null; //Store

loggerMiddleware = createLogger();

store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    ));

store.dispatch(setShopsData({shops:{id:1, name:'test', location:'x0'}}));
