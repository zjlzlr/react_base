import React from 'react';
import { connect } from 'react-redux';
class Home extends React.Component {
  render() {
    return (
      <div className="App">
        home
      </div>
    );
  }
}

export default connect()(Home);
