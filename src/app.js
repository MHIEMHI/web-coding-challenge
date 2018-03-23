'use strict'
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers/index.js';
import createLogger from 'redux-logger';
import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { setShopsData } from './actions/shops-actions.js';
import ShopsList from './components/shopList.js';

import { Provider } from 'react-redux';

// Middleware, storage, logger etc.
var loggerMiddleware = createLogger();

//Store
var store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    ));

render(
    <Provider store={store}>
        <ShopsList />
    </Provider>
    , document.getElementById('app')
)
store.dispatch(setShopsData({ shops: [{ id: 1, name: 'test', location: 'x0' }, { id: 2, name: 'test2', location: 'x1' }] }));