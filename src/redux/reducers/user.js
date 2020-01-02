import {
    GET_USER_INFO,
    GET_FINANCE_INFO
} from '@/redux/actions/user';
export default(state = {},action)=>{
    //console.log('state,action',state,action)
    switch (action.type){
        //用户信息
        case GET_USER_INFO:
            return Object.assign({
                ...state,
                userInfo:action.data
            });
        //获取用户的钱包与积分信息
        case GET_FINANCE_INFO:
            return Object.assign({
                ...state,
                financeInfo:action.data
            });
        default:
        return state
    }
}