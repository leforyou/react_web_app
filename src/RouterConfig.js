/*
import { Link } from 'react-router'
<ul>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/inbox">Inbox</Link></li>
</ul>
*/


//BrowserRouter,HashRouter,Link,MemoryRouter,NavLink,Prompt,Redirect,Route,Router,StaticRouter,Switch,generatePath,matchPath,withRouter
import {HashRouter, Route,Switch} from 'react-router-dom';
import React, { Component,Fragment } from 'react';

import Home from '@/views/Home/index';//首页 
import Customer from '@/views/Customer/index';//客服
import Partners from '@/views/Partners/index';//合作商
import User from '@/views/User/index';//个人中心
import UserInfo from '@/views/UserInfo/index';//个人信息页面
import NotFound from '@/views/NotFound/index';//404页面

class RouterConfig extends Component {
  constructor(props){
    super(props);
    this.state = {};
    console.log(this.props);
  }
  componentDidMount(){
    window.addEventListener('hashchange',function(e){
      //可用于路由拦截。注意：页面点击左上角刷新按钮不会触发该事件，只有链接改变会监听
      //console.log('监听hash链接的改变：',e);
    });
  }
  render() {
    return (
      <Fragment>
        <HashRouter>
          {/* <Header /> */}
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/Customer' exact component={Customer}></Route>
            <Route path='/Partners/:id' exact component={Partners}></Route>
            <Route path='/User/:id' exact component={User}></Route>
            <Route path='/UserInfo' exact component={UserInfo}></Route>
            <Route component={NotFound}>{/* 所有错误路由跳转页面 */}</Route>
          </Switch>
          </HashRouter>
        </Fragment>
    );
  }
}



export default RouterConfig;


/* 通配符
path属性可以使用通配符。*/

// <Route path="/hello/:name">
// 匹配 /hello/michael
// 匹配 /hello/ryan

// <Route path="/hello(/:name)">
// 匹配 /hello
// 匹配 /hello/michael
// 匹配 /hello/ryan

// <Route path="/files/*.*">
// 匹配 /files/hello.jpg
// 匹配 /files/hello.html

// <Route path="/files/*">
// 匹配 /files/ 
// 匹配 /files/a
// 匹配 /files/a/b

// <Route path="/**/*.jpg">
// 匹配 /files/hello.jpg
// 匹配 /files/path/to/file.jpg 

