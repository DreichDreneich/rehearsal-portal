import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import RoutesProvider from './routes';
import {store} from 'store/store'; 

require('./styles/index.less');
require('bootstrap/dist/js/npm');

ReactDom.render(
    <Provider store={store}>
        <RoutesProvider />
    </Provider>, 
    document.getElementById('app'));