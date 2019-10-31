import React from 'react';
import {connect} from 'react-redux';

import DishesPresentational from '../Presentational/DishesPresentational.native';

class DishesContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            Dishes:[]
        }
    }
    componentDidMount(){
        this.setState({Dishes:this.props.menu[this.props.match.params['dish']].Dishes})
        
    }
    render(){
        
        return(
           <DishesPresentational Dishes={this.state.Dishes} param={this.props.match.params['dish']}/>
        )
    }
}
const mapStateToProps = state =>({
menu:state.FetchMenuReducer
})
const mapActionToProps = {

}
export default connect(mapStateToProps,mapActionToProps)(DishesContainer)