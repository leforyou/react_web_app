import {
    GET_USER_INFO,
    GET_FINANCE_INFO
} from '@/redux/actions/user';

//默认值
let defaultState = {
    userInfo:{},
    financeInfo:{}
};

export default(state = defaultState,action)=>{
    //console.log('state,action',state,action);
    switch (action.type){
        //用户信息
        case `${GET_USER_INFO}_PENDING`://redux-promise-middleware插件的异步操作，等待状态，可做loading处理
            return state;
        case `${GET_USER_INFO}_FULFILLED`://redux-promise-middleware插件的异步操作，完成状态
            return Object.assign({
                ...state,
                userInfo:action.payload
            });
        //获取用户的钱包与积分信息
        case `${GET_FINANCE_INFO}_PENDING`:
            return state;
        case `${GET_FINANCE_INFO}_FULFILLED`:
            return Object.assign({
                ...state,
                userInfo:action.payload
            });
        //默认值
        default:
        return state;
    }
}