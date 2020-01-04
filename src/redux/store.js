//【npm install redux react-redux --save】   需要安装【redux】【react-redux】
//【npm i redux-promise-middleware -s】  解决action异步的插件
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';

import promise from 'redux-promise-middleware';



const initValue={};
const store = createStore(reducers,initValue,applyMiddleware(promise));
export default store;