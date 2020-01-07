import React, { Component,Fragment } from 'react';
import { withRouter,NavLink } from 'react-router-dom';//高阶组件将react-router的history、location、match三个对象绑定到this.props。
import NavigationBar from '@/components/NavigationBar/index';


import './index.scss';


import {getUserInfo,getFinanceInfo} from '@/redux/actions/user';
import {connect} from 'react-redux'; 
/*
action的方法除了挂载到this.props上，还有下面这种使用方式
import store from '@/redux/store';
console.log(store);
store.dispatch({
    type: "GET_USER_INFO"
});
*/

class User extends Component {
    constructor(props){
        super(props);
        this.state = {};
        console.log('react-router:',this.props.userInfo);
    }
    componentDidMount(){
        this.props.getUserInfo();//获取用户信息
        this.props.getFinanceInfo();//获取钱包与积分
    }
    render() {
        let {mobile,name} = this.props.userInfo;
        console.log('react-router:',this.props.userInfo);
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
                                        <div className="nick">{name || '随风飘'}</div>
                                        <div className="member">普通用户</div>
                                    </div>
                                    <div className="phone">{mobile || '13800138000'}</div>
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

function mapStateToProps(state,ownProps){
    //console.log('state,ownProps：',state,ownProps);
    return{
        userInfo:state.user.userInfo
    }
}
function mapDispatchToProps(dispatch,ownProps){
    //console.log(dispatch,'\n\n',ownProps);
    return {
        getUserInfo:(parms)=>{
            dispatch(getUserInfo(parms))
        },
        getFinanceInfo:(parms)=>{
            dispatch(getFinanceInfo(parms))
        }
    }
}

/*
//import PropTypes from 'prop-types'; //引入限制UI组件(展示组件)属性限制
//对展示组件中属性各个值得类型进行限制 不合符规则会报错
User.propTypes = {
    userInfo: PropTypes.object.isRequired, //属性对象中的value必须是number类型还有必须有值
}; */

let User_ = connect(mapStateToProps,mapDispatchToProps)(User);//连接并返回
export default NavigationBar(withRouter(User_),3);//高阶组件的使用