import React, { Component,Fragment } from 'react';
import { withRouter } from 'react-router-dom';//高阶组件将react-router的history、location、match三个对象绑定到this.props。
import NavigationBar from './../../components/NavigationBar/index';


import './index.scss';

class User extends Component {
    constructor(props){
        super(props);
        this.state = {};
        console.log('react-router:',this.props);
    }
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

export default NavigationBar(withRouter(User),3);//高阶组件的使用