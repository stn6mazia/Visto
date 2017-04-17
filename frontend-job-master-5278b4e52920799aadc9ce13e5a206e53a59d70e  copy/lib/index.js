/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import './bootstrap.less';

import store from './store';
import routes from './routes';

ReactDOM.render(
    <Provider store={store}>
        <Router
            history={browserHistory}
            routes={routes}
        />
    </Provider>,
    document.querySelector('.js-react-app')
);
