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
                    <div className="head-info">
                        <div className="bg">
                            <img src="/img/user-bg.png" alt="" />
                        </div>
                        <div className="info">
                            <div className="info-box">
                                <div className="img-box">
                                    <img className="pic" src="/img/user-pic.png" alt=""/>
                                </div>
                                <div className="personal">
                                    <div className="name">
                                        <div className="nick">随风飘</div>
                                        <div className="member">普通用户</div>
                                    </div>
                                    <div className="phone">13800138000</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <NavigationBar activeNum={3}></NavigationBar> 普通组件 */}
            </Fragment>
        );
    }
}

export default NavigationBar(withRouter(User),3);//高阶组件的使用