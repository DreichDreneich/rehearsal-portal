import * as React from 'react';
import * as ReactDom from 'react-dom';
import RoutesProvider from './routes';
require('./styles/index.less');
require('bootstrap/dist/js/npm');

ReactDom.render(<RoutesProvider />, document.getElementById('app'));