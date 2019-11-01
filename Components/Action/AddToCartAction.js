import {ADD_TO_CART} from '../ActionCreators'

export default function AddToCartAction(dish){
    return (dispatch,getState) =>{
        dispatch({
            type:ADD_TO_CART,
            payload:dish
        })
    }
}
