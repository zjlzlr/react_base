import axios from 'axios';
// 取消请求
// const CancelToken = axios.CancelToken;
// 是否需要拦截code==-1的状态
// let is_log: boolean = false;
// 设置默认请求头
// axios.defaults.headers = {
//     'X-Requested-With': 'XMLHttpRequest',
//     'Content-Type': 'application/x-www-form-urlencoded',
// };
axios.defaults.baseURL = "https://api.iteng.wang:10001/";
// 请求超时的时间限制
axios.defaults.timeout = 20000;
// 开始设置请求 发起的拦截处理
// config 代表发起请求的参数的实体
// let requestName: any;
axios.interceptors.request.use((config: any) => {
    return config;
}, (error: any) => {
    return Promise.reject(error);
});

// 请求到结果的拦截处理
axios.interceptors.response.use( (config: any) => {
    // 返回请求正确的结果
    return config.data;
}, (error: any) => {
    return Promise.reject(error);
    // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
});
export default axios