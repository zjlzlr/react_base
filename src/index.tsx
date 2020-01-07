import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux';

import App from './App';
import Login from './pages/login';
// import Page2 from './pages/page2';
import store from './store';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <Provider store={ store }>
        <Fragment>
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={App} />
                        <Route path="/login" component={Login} />
                    </Switch>
                </BrowserRouter>
            </div>
        </Fragment>
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();
