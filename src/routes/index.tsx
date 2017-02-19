import * as React from 'react';
import { Router, hashHistory, Route, IndexRedirect  } from 'react-router';

import {App} from '../app';
import {
    Cabinet, 
    Base, 
    Room,
    RoomsRibbon,
    Authentication,
    Registration
} from '../modules';

export class RoutesProvider extends React.Component<null, null> {
    render() {
        return (
            <Router history={hashHistory} >
                <Route path="/" component={App} >
                    <IndexRedirect to="/ribbon" />
                    <Route path="/cabinet" component={Cabinet} />
                    <Route path="/cabinet/base/:baseId" component={Base} />
                    <Route path="/cabinet/base/:baseId/room/:roomId" component={Room} />
                    <Route path="/ribbon" component={RoomsRibbon} />
                    <Route path="/login" component={Authentication} />
                    <Route path="/registration" component={Registration} />
                </Route>
            </Router>
        )
    }
}