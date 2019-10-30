import {FETCH_MENU} from '../ActionCreators';

const initialState = {
    
}
export default function FetchMenuReducer(state=initialState,action){

    switch(action.type){
        case FETCH_MENU:
                var menu = action.payload
            return {
                ...state,...menu
            }
        default:
            return state
    }

}