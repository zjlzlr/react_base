import React from 'react';
import Header from '@/components/Header'
import {Route,Switch} from 'react-router-dom'
import Menu from '@/components/Menu'
import Page1 from '@/pages/page1'
import Page2 from '@/pages/page2'
import Home from '@/pages/home'
import '@/App.scss';
let App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <Header></Header>
      </div>
      <div className="app-content">
        <div className="app-content-menu">
          <Menu></Menu>
        </div>
        <div className="app-content-body">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route key="1" path='/page1' exact component={Page1} />
              <Route key="2" path='/page2' exact component={Page2} />
            </Switch>
            {/* <Route path='/page2' exact component={Page2} /> */}
        </div>
      </div>
    </div>
  );
}
export default App;
