import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import { Provider } from 'react-redux';

import App from './App';
import Home from './pages/home';
import Page1 from './pages/page1';
// import Page2 from './pages/page2';
import store from './store';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <Provider store={ store }>
        <Fragment>
            <div>
                <BrowserRouter>
                    <App></App>
                    <div>
                        <Home></Home>
                        <div>
                            <Route key="2" path='/page1' component={Page1} />
                            {/* <Route path='/page2' exact component={Page2} /> */}
                        </div>
                    </div>
                    
                </BrowserRouter>
            </div>
        </Fragment>
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();
