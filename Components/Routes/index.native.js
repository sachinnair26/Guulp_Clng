import React from 'react';
import {NativeRouter as Router,Switch,Route,Link} from 'react-router-native'
import Menu from '../Menu';
function Routes(){
    
    return(
        <Router>
            <Switch>
                <Route path='/' component={Menu}/>
            </Switch>
        </Router>
    )
}
export default Routes;