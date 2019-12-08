import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';

import './axios';//导入axios网络http请求库

import App from './App';


import './css/reset.scss';
import './css/main.scss';









ReactDOM.render(
    <Fragment>
        <App />
    </Fragment>,
    document.getElementById('root')
);