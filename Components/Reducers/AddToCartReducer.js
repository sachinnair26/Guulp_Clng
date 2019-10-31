import {ADD_TO_CART} from '../ActionCreators';

const initialState = {
    cart:[]
}
export default function AddToCartReducer(state=initialState,action){
    switch (action.type) {
        case ADD_TO_CART:
            var cart = [...state['cart'],action.payload]
                    
            return {
                ...state,cart
            }
        default:
            return state
    }
}