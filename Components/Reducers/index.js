import FetchMenuReducer from './FetchMenuReducer';
import SelectDishReducer from './SelectDishReducer';
import AddToCartReducer from './AddToCartReducer';
import {combineReducers} from 'redux';
import React from 'react';

const RootReducer = combineReducers({
    FetchMenuReducer:FetchMenuReducer,
    SelectDishReducer:SelectDishReducer,
    AddToCartReducer:AddToCartReducer
})
export default RootReducer;