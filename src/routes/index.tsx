import * as React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import {App} from '../app';
import {Cabinet} from '../modules';

export default class RoutesProvider extends React.Component<null, null> {
    render() {
        return (
            <Router history={hashHistory} >
                <Route path="/" component={App} >
                    <Route path="cabinet" component={Cabinet}/>
                </Route>
            </Router>
        )
    }
}