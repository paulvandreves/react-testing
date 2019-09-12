import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 

import Dicussion from './discussion';
import Rules from './rules';
import Workflow from './workflow';

// Not using an arrow function 
// React will name function by filename automatically 
export default function() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Dicussion} /> 
                <Route exact path="/rules" component={Rules} />
                <Route exact path="/workflow" component={Workflow} /> 
            </Switch>
        </div>
    )
}