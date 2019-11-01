import {REMOVE_FROM_CART} from '../ActionCreators'

export default function RemoveFromCartAction(index){
    return (dispatch,getState) =>{
        dispatch({
            type:REMOVE_FROM_CART,
            index:index
        })
    }
}