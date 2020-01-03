import {
    GET_USER_INFO,
    GET_FINANCE_INFO
} from '@/redux/actions/user';
export default(state = {},action)=>{
    //console.log('state,action',state,action)
    switch (action.type){
        //用户信息
        case GET_USER_INFO:
            console.log('action.data',action.data);
            return Object.assign({
                ...state,
                aaa:8888,
                userInfo:action.data || {}
            });
        //获取用户的钱包与积分信息
        case GET_FINANCE_INFO:
            return Object.assign({
                ...state,
                financeInfo:action.data || {}
            });
        default:
        return state
    }
}