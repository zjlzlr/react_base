import React from 'react';
import { connect } from 'react-redux';
import {Link,Route,Switch} from 'react-router-dom'
import Page2 from './page2';
class Page1 extends React.Component {
  render() {
    return (
      <div className="App">
        page1
        <Link to="/page1/page2">topage2</Link>
        <Switch><Route path='/page1/page2' component={Page2} /></Switch>
      </div>
    );
  }
}

export default connect()(Page1);
