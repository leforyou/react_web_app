import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';

import './axios';//导入axios网络http请求库
import './components/Modal';//导入

import App from './App';


import './css/reset.scss';
import './css/main.scss';


import store from '@/redux/store';
import { Provider } from "react-redux";





window.log = window.console.log;//log('简写输入的方法log:',1111);




ReactDOM.render(
    <Fragment>
        <Provider store={store}>
            <App />
        </Provider>
    </Fragment>,
    document.getElementById('root')
);