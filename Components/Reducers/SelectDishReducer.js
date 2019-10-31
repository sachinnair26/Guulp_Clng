import {SELECT_DISH} from '../ActionCreators'

const initialState = {
    selected_dish:{}
}
export default function SelectDishReducer(state=initialState,action){
    switch (action.type) {
        case SELECT_DISH:
            var selected_dish = action.payload
        return {
            ...state,selected_dish
        }
        default:
            return state
    }
}