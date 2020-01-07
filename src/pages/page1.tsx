import React from 'react';
import { connect } from 'react-redux';
class Page1 extends React.Component {
  render() {
    return (
      <div className="App">
        page1
      </div>
    );
  }
}

export default connect()(Page1);
