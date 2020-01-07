import React from 'react';
import {Button} from 'antd'
import { connect } from 'react-redux';
import { UserModel } from './../models/index'
class Page1 extends React.Component {
  componentDidMount() {
    // this.getUserList()
  }
  async getUserList() {
    // console.log(555,UserModel.getUserList)
    const rst:any = await UserModel.getUserList("bee/consult/getProjectList?pageNo=1&pageSize=20")
    console.log(444,rst)
  }
  render() {
    return (
      <div className="App">
        page1
        <Button onClick={this.getUserList}>axios</Button>
      </div>
    );
  }
}

export default connect()(Page1);
