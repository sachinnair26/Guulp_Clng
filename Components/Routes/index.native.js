import React from 'react';
import {NativeRouter as Router,Switch,Route,Link} from 'react-router-native'
import Menu from '../Menu';
function Routes(){
    
    return(
        <Router>
            <Switch>
                <Route path='/' component={Menu}/>
                <Route path='/:dish' component={}/>
            </Switch>
        </Router>
    )
}
export default Routes;