import {createStore,applyMiddleware,compose} from 'redux';
import React from 'react';
import thunk from "redux-thunk";
import RootReducer from '../Reducers';
import {Provider} from 'react-redux';
import Routes from '../Routes';

let initialState = {}
const Enhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
 const Store = createStore(RootReducer,initialState,Enhancers)

 
 function App(){
     return(
         <Provider store={Store}><Routes/></Provider>
         
    )
}
export default App