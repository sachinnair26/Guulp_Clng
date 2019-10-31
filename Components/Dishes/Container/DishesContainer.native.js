import React from 'react';
import {connect} from 'react-redux';
import SelectDishAction from '../../Action/SelectDishAction';
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
        console.log(this.props)
        return(
           <DishesPresentational 
           Dishes={this.state.Dishes} 
           param={this.props.match.params['dish']} 
           SelectDishAction={this.props.SelectDishAction}
           history={this.props.history}/>
        )
    }
}
const mapStateToProps = state =>({
menu:state.FetchMenuReducer
})
const mapActionToProps = {
SelectDishAction:SelectDishAction
}
export default connect(mapStateToProps,mapActionToProps)(DishesContainer)