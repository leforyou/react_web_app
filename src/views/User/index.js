import React, { Component,Fragment } from 'react';

import NavigationBar from './../../components/NavigationBar/index';


import './index.scss';

class User extends Component {
    render() {
        return (
            <Fragment>
                <div className="User">
                    我是个人中心页面！
                  
                </div>
                {/* <NavigationBar activeNum={3}></NavigationBar> 普通组件 */}
            </Fragment>
        );
    }
}

export default NavigationBar(User,3);//高阶组件的使用