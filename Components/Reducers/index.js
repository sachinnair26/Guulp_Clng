import FetchMenuReducer from './FetchMenuReducer';
import {combineReducers} from 'redux';
import React from 'react';

const RootReducer = combineReducers({
    FetchMenuReducer:FetchMenuReducer,
})
export default RootReducer;