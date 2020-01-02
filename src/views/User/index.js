import React, { Component,Fragment } from 'react';
import { withRouter,NavLink } from 'react-router-dom';//高阶组件将react-router的history、location、match三个对象绑定到this.props。
import NavigationBar from '@/components/NavigationBar/index';


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
                            <img src={require("@/img/user-bg.png")} alt="" />
                        </div>
                        <div className="info">
                            <div className="info-box">
                                <div className="img-box">
                                    <img className="pic" src={require("@/img/user-pic.png")} alt=""/>
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

                    <div className="user-about">
                        <ul>
                            <li>
                                <div className="li-box">
                                    <img src={require("@/img/user-about0.png")} alt=""/>
                                    <div className="desc">我的钱包</div>
                                </div>
                            </li>
                            <li>
                                <div className="li-box">
                                    <img src={require("@/img/user-about1.png")} alt=""/>
                                    <div className="desc">我的积分</div>
                                </div>
                            </li>
                            <li>
                                <NavLink className="li-box" to="/UserInfo">
                                    <img src={require("@/img/user-about2.png")} alt=""/>
                                    <div className="desc">个人信息</div>
                                </NavLink>
                            </li>
                            <li>
                                <div className="li-box">
                                    <img src={require("@/img/user-about3.png")} alt=""/>
                                    <div className="desc">我的订单</div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="user-more">
                        <ul>
                            <li>
                                <div className="li-box">
                                    <div className="desc">上云记录</div>
                                    <img src={require("@/img/ico-more1.png")} alt=""/>
                                </div>
                            </li>
                            <li>
                                <div className="li-box">
                                    <div className="desc">推广二维码</div>
                                    <img src={require("@/img/ico-more1.png")} alt=""/>
                                </div>
                            </li>
                            <li>
                                <div className="li-box">
                                    <div className="desc">代理申请</div>
                                    <img src={require("@/img/ico-more1.png")} alt=""/>
                                </div>
                            </li>
                            <li>
                                <div className="li-box">
                                    <div className="desc">帮助中心</div>
                                    <img src={require("@/img/ico-more1.png")} alt=""/>
                                </div>
                            </li>
                            <li>
                                <div className="li-box">
                                    <div className="desc">关于我们</div>
                                    <img src={require("@/img/ico-more1.png")} alt=""/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <NavigationBar activeNum={3}></NavigationBar> 普通组件 */}
            </Fragment>
        );
    }
}

export default NavigationBar(withRouter(User),3);//高阶组件的使用