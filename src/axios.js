/*
npm install axios qs --save
import axios from 'axios';
import qs from 'qs';
*/

import axios from "axios";
import qs from 'qs';//解决content-type为application/x-www-form-urlencoded传参的问题

import { Component } from "react";
import Toast from './components/Toast/index';

//let isOnLine = process.env.NODE_ENV === 'production'? true:false; //生产环境：production 与 开发环境：development

/* 
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
*/

// 请求前拦截
axios.interceptors.request.use(
  config => {
    //config.url = 'https://www.lou5u.com/ict-wx/' + config.url;//因为接口跨域问题，必须使用代理转发。在package.json中配置了，所以不要加域名或IP，加了就不会转发接口。
    //config.timeout = 20E3;//请求超时时长
    config.headers["content-type"] = "application/x-www-form-urlencoded"; // 默认值 application/json
    if(config.method === "post" && config.headers["content-type"] === "application/x-www-form-urlencoded" && config.data !== undefined){
      config.data = qs.stringify(config.data);
    }
    //let token = localStorage.getItem('token');
    config.headers["user-token"] = 'bJCAiRERbHTRQPAwd2NIFx3GXWn0sTS/IGfWkrYamdWembfBvanJm82jIlhc/dguB+NA4fndWxUbVaqjNczYOth9gY3nnv5FDMwI+PHmIlY=';//这个token要在微信开发工具中的复制出来,手机没token会报错的

    //console.log(config);
    return config;
  },
  err => {
    console.log("请求超时");
    return Promise.reject(err);
  }
);

// 返回后拦截
axios.interceptors.response.use(
  res => {
    return res.data;
  },
  err => {
    Toast.show('服务器繁忙!');
    if (err.response.status === 504 || err.response.status === 404) {
      console.log("服务器被吃了⊙﹏⊙∥");
    } else if (err.response.status === 401) {
      console.log("登录信息失效⊙﹏⊙∥");
    } else if (err.response.status === 500) {
      console.log("服务器开小差了⊙﹏⊙∥");
    }
    return Promise.reject(err);
  }
);

Component.prototype.axios = {
  get: function(url, params = {}) {
      return axios.get( url, { params:{...params} } ); //返回的Promise对象
  },
  post: function(url, params = {}) {
      return axios.post(url, params); //返回的Promise对象
  },
  delete: function(url, params = {}) {
      return axios.delete(url, {data:{...params}}); //返回的Promise对象。//如果服务端将参数作为java对象来封装接受
      //return axios.delete(url, {params:{...params}}); //返回的Promise对象。//如果服务端将参数作为url参数来接受，则请求的url为:www.demo/url?a=1&b=2形式
  },
  put: function(url, params = {}) {
      return axios.put(url, params); //返回的Promise对象
  },
  patch: function(url, params) {
      return axios.patch(url, params); //返回的Promise对象
  }
};

/*
将axios的请求库绑定到组件上，使用方法：this.axios.get();
console.log(Component.prototype.axios);


非组件页面调用的使用方式
import { Component } from "react";
let { axios } = Component.prototype;
axios.get();
*/

