import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
class Page1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        menu
        <Link to="/page1">topage1</Link>
        <Link to="/page2">topage2</Link>
        
      </React.Fragment>
    );
  }
}

export default connect()(Page1);
