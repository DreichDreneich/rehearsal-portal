import * as React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import {App} from '../app';
import {News} from '../modules';
import {Ribbon} from '../modules';

export default class RoutesProvider extends React.Component<null, null> {
    render() {
        return (
            <Router history={hashHistory} >
                <Route path="/" component={App} >
                    <IndexRoute component={News} />
                    <Route path="news" component={News} />
                    <Route path="ribbon" component={Ribbon} />
                </Route>
            </Router>
        )
    }
}