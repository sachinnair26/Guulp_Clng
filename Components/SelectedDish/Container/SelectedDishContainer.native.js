import React, { Component } from 'react'
import { connect } from 'react-redux';
import SelectedDishPresentational from '../Presentational/SelectedDishPresentational';
import AddToCartAction from '../../Action/AddToCartAction';
class SelectedDishContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_dish: {},
            count: 1,
            size: '',
            addon: '',
            price: ''
        }
    }

    static getDerivedStateFromProps(props, state) {

        if (props.selected_dish !== state.selected_dish) {
            var dish = props.match.params['dish']
            var selected_dish = props.match.params['name']
            var selected_dish = props.menu[dish].Dishes.find(function (element) {

                return element.name = selected_dish;
            })
            return {
                selected_dish: selected_dish,
                size: Object.keys(selected_dish.size)[0],
                price: selected_dish.price
            }
        }
        return null;
    }

    onChangeSize = (a) => {

        this.setState({ size: a })
    }
    onChangeAddon = (b) => {
        if (this.state.addon === b) {
            this.setState({ addon: '' })
        } else {
            this.setState({ addon: b })

        }
    }
    calculatePrice = () => {

        var initial_price = this.state.selected_dish.price
        var size_price = this.state.selected_dish.size[this.state.size]
        var addon_price = this.state.addon !== '' ? this.state.selected_dish.addons[this.state.addon] : 0
        var total_price = (initial_price + size_price + addon_price) * this.state.count
        this.setState({ price: total_price })
    }
    componentDidUpdate(props, state) {
        if (state.count !== this.state.count || state.addon !== this.state.addon || state.size !== this.state.size) {
            this.calculatePrice()
        }

    }
    changeCount = (value) => {
        this.setState({ count: value === 'inc' ? this.state.count + 1 : this.state.count - 1 })
    }
    onClickAddToCartButton = () =>{
        var data = {...this.state.selected_dish}
        data['size'] = this.state.size
        data['addons'] = this.state.addon
        data['count'] = this.state.count
        data['price'] = this.state.price
       this.props.AddToCartAction(data)
    }
    render() {

        return (
            <SelectedDishPresentational
                selected_dish={this.state.selected_dish}
                count={this.state.count}
                changeCount={this.changeCount}
                size={this.state.size}
                addon={this.state.addon}
                price={this.state.price}
                onChangeAddon={this.onChangeAddon}
                onChangeSize={this.onChangeSize}
                onClickAddToCartButton={this.onClickAddToCartButton}
            />
        )
    }
}

const mapStateToProps = state => ({
    menu: state.FetchMenuReducer,
    selected_dish: state.SelectDishReducer.selected_dish
})
const mapActionToProps = {
    AddToCartAction: AddToCartAction
}
export default connect(mapStateToProps, mapActionToProps)(SelectedDishContainer)