import axios from "axios";
import { Component } from "react";

//let isOnLine = process.env.NODE_ENV === 'production'? true:false; //生产环境：production 与 开发环境：development

// 请求前拦截
axios.interceptors.request.use(
  config => {
    //console.log(config);
    //config.url = 'https://www.lou5u.com/ict-wx/' + config.url;//因为接口跨域问题，必须使用代理转发。在package.json中配置了，所以不要加域名或IP，加了就不会转发接口。
    
    config.headers["content-type"] = "application/x-www-form-urlencoded"; // 默认值 application/json
    let token = localStorage.getItem('token');
    config.headers["user-token"] = 'bJCAiRERbHTRQPAwd2NIFwqLUdLyvThceAZ7Qxyo+HrZKQ62p/u56WBRCQa/dAuOZMrjOfF9fgI7hQeFS1yEJHigmuGMY6uCnhVfCpbUcwk=';//这个token要在微信开发工具中的复制出来,手机没token会报错的

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

Component.prototype.axios = axios;//将axios的请求库绑定到组件上，使用方法：this.axios.get();

