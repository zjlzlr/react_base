import * as React from 'react';
import { connect } from 'react-redux';

// 创建类型接口
// export interface Iprops {
//     value: number
// }

// 使用接口代替 PropTypes 进行类型校验:使用类的方式
const Counter = ({counter}: any) => {
    return <p>Clicked: { counter } times</p>
}
// state:redux数据
function mapStateToProps(state:any) {
    console.log(state)
    return {counter: state.User.counter}
}
export default connect(mapStateToProps)(Counter);
