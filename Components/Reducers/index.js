import FetchMenuReducer from './FetchMenuReducer';
import SelectDishReducer from './SelectDishReducer';
import {combineReducers} from 'redux';
import React from 'react';

const RootReducer = combineReducers({
    FetchMenuReducer:FetchMenuReducer,
    SelectDishReducer:SelectDishReducer
})
export default RootReducer;