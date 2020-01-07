//【npm install redux react-redux --save】   需要安装【redux】【react-redux】
//【npm i redux-promise-middleware -s】  解决action异步的插件
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';

import promise from 'redux-promise-middleware';



const initValue={};
const store = createStore(reducers,initValue,applyMiddleware(promise));
export default store;




/* 
redux在页面其它的使用方式

import {getUserInfo} from '@/redux/actions/user';
import store from '@/redux/store';


store.dispatch(getUserInfo());//获取用户信息   --- 注意：返回的是promise对象，可以使用 async/await
let {userInfo} = store.getState().user;



*/