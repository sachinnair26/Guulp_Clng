import React from 'react';
import MenuPresentational from '../Presentational/MenuPresentational.native';
import { connect } from 'react-redux';
import FetchMenuAction from '../../Action/FetchMenuAction';
class MenuContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            menu:{}
        }
    }
    componentDidMount() {
        this.props.FetchMenuAction()
    }
    static getDerivedStateFromProps(props, state) {
        if(props.menu !== state.menu){
            return{
                menu:props.menu
            }
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.menu !== this.props.menu){
            this.setState({loading:false})
        }
    }

    render() {
        return (

            <MenuPresentational menu={this.state.menu} history={this.props.history} loading={this.state.loading}/>
        )
    }
}
const mapStateToProps = state => ({
    menu:state.FetchMenuReducer
})
const mapActionToProps = {
    FetchMenuAction: FetchMenuAction
}
export default connect(mapStateToProps, mapActionToProps)(MenuContainer)