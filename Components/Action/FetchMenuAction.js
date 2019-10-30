import {FETCH_MENU} from '../ActionCreators'
import {database} from 'react-native-firebase'



export default function FetchMenuAction(){
   return (dispatch,getState) =>{ 
       
        database().ref('Menu').on('value',(lic)=>{
            dispatch({
                type:FETCH_MENU,
                payload:lic.val()
            })
       })
    }
}