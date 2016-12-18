import * as React from 'react';
import * as ReactDom from 'react-dom';
import RoutesProvider from './routes';
require('./styles/index.less');

ReactDom.render(<RoutesProvider />, document.getElementById('app'));