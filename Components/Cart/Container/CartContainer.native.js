import React from 'react'
import CartPresentational from '../Presentational/CartPresentational'
import {connect} from 'react-redux'
class CartContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <CartPresentational cart={this.props.cart}/>
        )
    }
}
const mapStateToProps = state =>({
    cart:state.AddToCartReducer.cart
})
const mapActionToProps = {

}
export default connect(mapStateToProps,mapActionToProps)(CartContainer)