import {SELECT_DISH} from '../ActionCreators'



export default function SelectDishAction(dish){
    return (dispatch,getState) =>{
        dispatch({
            type:SELECT_DISH,
            payload:dish
        })
    }
}