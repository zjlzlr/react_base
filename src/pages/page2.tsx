import React from 'react';
import { Button } from 'antd';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
let Page2 = ({test}:any) => {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary" onClick={test}>redux</Button>
        <Counter/>
      </header>
    </div>
  );
}
// redux and props
function mapStateToProps(state:any) {
  return {}
}
// dispatch
const mapDispatchToProps = (dispatch:any) => ({
  test: () => {
    dispatch({type:'INCREASE', counter:Date.now()});
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Page2);
