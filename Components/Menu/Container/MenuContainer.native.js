import React from 'react';
import MenuPresentational from '../Presentational/MenuPresentational.native';
import { connect } from 'react-redux';
import FetchMenuAction from '../../Action/FetchMenuAction';
class MenuContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        this.props.FetchMenuAction()
    }
    render() {
        return (

            <MenuPresentational menu={this.props.menu} />
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