import React, { Component } from 'react'
import { connect } from 'react-redux';
import SelectedDishPresentational from '../Presentational/SelectedDishPresentational';
class SelectedDishContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_dish: {}
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
    render() {

        return (
            <SelectedDishPresentational selected_dish={this.state.selected_dish}  />
        )
    }
}

const mapStateToProps = state => ({
    menu: state.FetchMenuReducer
})
const mapActionToProps = {

}
export default connect(mapStateToProps, mapActionToProps)(SelectedDishContainer)