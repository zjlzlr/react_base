import Http from './Http'
const getUserList = async (url:any) => {
    return await Http.get(url)
}
export default {
    getUserList
}