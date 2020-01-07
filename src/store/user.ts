// interface State {
//   counter: Number;
// }
// interface Actions {
//     INCREASE: String;
//     DECREASE: String;
// }
// 参数
const initState = {
    counter: 1
}
const types = {
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE'
}
// action
export const increment = (counter:Number) => {
    return {
        type: types.INCREASE,
        counter
    }
}
// reducer
export default (state=initState,action:any):any => {
    switch (action.type) {
        case types.INCREASE:
          return {...state, counter:action.counter}
        default:
          return state
    }
}
