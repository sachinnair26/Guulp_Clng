import React from 'react'
import CartPresentational from '../Presentational/CartPresentational'
import RemoveFromCartAction from '../../Action/RemoveFromCartAction';
import {connect} from 'react-redux'
class CartContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <CartPresentational cart={this.props.cart} RemoveFromCartAction={this.props.RemoveFromCartAction}/>
        )
    }
}
const mapStateToProps = state =>({
    cart:state.AddToCartReducer.cart
})
const mapActionToProps = {
RemoveFromCartAction:RemoveFromCartAction
}
export default connect(mapStateToProps,mapActionToProps)(CartContainer)