import React, { Component } from 'react'
import { connect } from 'react-redux';
import SelectedDishPresentational from '../Presentational/SelectedDishPresentational';
class SelectedDishContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_dish: {},
            count:1
        }
    }
   
    static getDerivedStateFromProps(props, state){
        var dish = props.match.params['dish']
        var selected_dish = props.match.params['name']
        return {
            selected_dish:props.menu[dish].Dishes.find(function (element) {

                return element.name = selected_dish;
            })
        }
    }
changeCount = (value) =>{
    this.setState({count:value ==='inc'? this.state.count+1 : this.state.count-1})
}
    render() {

        return (
            <SelectedDishPresentational selected_dish={this.state.selected_dish} count={this.state.count}  
                changeCount={this.changeCount}
            />
        )
    }
}

const mapStateToProps = state => ({
    menu: state.FetchMenuReducer
})
const mapActionToProps = {

}
export default connect(mapStateToProps, mapActionToProps)(SelectedDishContainer)