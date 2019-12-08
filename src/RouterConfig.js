/* import React, { Component } from 'react';

class RouterConfig extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default RouterConfig; */



/*
import { Link } from 'react-router'
<ul>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/inbox">Inbox</Link></li>
</ul>
*/


//BrowserRouter,HashRouter,Link,MemoryRouter,NavLink,Prompt,Redirect,Route,Router,StaticRouter,Switch,generatePath,matchPath,withRouter
import {HashRouter, Route} from 'react-router-dom';
import React, { Component,Fragment } from 'react';

import Home from './views/Home/index';//首页 
import Customer from './views/Customer/index';//客服
import Partners from './views/Partners/index';//合作商
import User from './views/User/index';//个人中心
// import NotFound from './views/NotFound/index';

class RouterConfig extends Component {
  render() {
    return (
      <Fragment>
        <HashRouter>
          {/* <Header /> */}
          <Route path='/' exact component={Home}></Route>
          <Route path='/Customer' exact component={Customer}></Route>
          <Route path='/Partners' exact component={Partners}></Route>
          <Route path='/User/:id' exact component={User}></Route>
          {/* <Route path="*" component={NotFound}></Route> */}
          </HashRouter>
        </Fragment>
    );
  }
}



export default RouterConfig;

