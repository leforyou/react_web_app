import { Component } from "react";
let { axios } = Component.prototype;

export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_FINANCE_INFO = 'GET_FINANCE_INFO';
//异步可以放在组件内操作，完成后再调用action函数赋值。也可以直接放在action内调执行。

//获取用户信息
export const getUserInfo = (parms) => {//支持传参数parms
    return {
      type: GET_USER_INFO,
      payload: {
          //redux-promise-middleware插件的异步操作
          promise:  new Promise((resolve,reject)=>{
            axios.get(`/appWx/getUserInfo`).then(res=>{
              if (res.code === 200 && res.result !== null) {
                res.result.mobile = res.result.mobile.replace(/(\d{3})\d*(\d{4})/, '$1****$2');
                //res.result.name = res.result.name.substring(0, 1) + '**';
                //小程序只有三种角色：ORDINARY（普通用户）、SALES（销售）、 AGENT（代理）、
                //注意：接口传来的数据可能是roleNames = 【"AGENT,CUSTOMERSERVICE,ENGINEER,SALES,超级管理员"】销售代理同时存在，优先显示代理
                let getUserRoleName = function(str){
                    let name = null;
                    let arr = ['ORDINARY','SALES','AGENT'];
                    if(str.indexOf(arr[1]) !== -1)name = arr[1];//匹配销售
                    if(str.indexOf(arr[2]) !== -1)name = arr[2];//匹配代理，同时存在销售，优先显示代理
                    if(name === null)name = arr[0];//普通用户---前面的销售，代理都匹配不上，就设置为普通用户
                    return name;
                };
                res.result.roleNames = getUserRoleName(res.result.roleNames);
              }
              resolve(res.result || {});
            });
          })
      }
    }
}

//获取钱包与积分信息
export const getFinanceInfo = (parms) => {
    return {
      type: GET_FINANCE_INFO,
      //payload: {name:'Mr.wang'}
      payload: new Promise((resolve,reject)=>{ //异步写法二
        axios.get(`/appWx/finance/userFund/info`).then(res=>{
          resolve(res.result || {});
        });
      })
    }
}