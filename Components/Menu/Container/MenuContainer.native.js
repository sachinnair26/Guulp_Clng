import React from 'react';
import MenuPresentational from '../Presentational/MenuPresentational.native';
import {database} from 'react-native-firebase'

class MenuContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menu:{}
        }
    }
    componentDidMount(){
       database().ref('Menu').on('value',(lic)=>{
         
        this.setState({menu:lic.val()})
       })
    }
    render(){
        return(

            <MenuPresentational menu={this.state.menu}/>
        )
    }
}
export default MenuContainer