import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
class Home extends React.Component {
  render() {
    return (
      <div className="App">
        home
        <Link to="/page1">topage1</Link>
        
      </div>
    );
  }
}

export default connect()(Home);
