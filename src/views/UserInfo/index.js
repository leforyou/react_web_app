import React, { Component } from 'react';
import './index.scss';

import ChangeNickNameLayer from '@/components/ChangeNickNameLayer';



import {getUserInfo} from '@/redux/actions/user';
import {connect} from 'react-redux'; 


class UserInfo extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        this.props.getUserInfo();//获取用户信息
    }
    changeNickName(){
        //修改昵称
        ChangeNickNameLayer.show();
    }
    render() {
        return (
            <div className="UserInfo">
                <ul>
                    <li>
                        <div className="li-box" onClick={this.changeNickName.bind(this)}>
                            <div className="name">昵称</div>
                            <div className="right">
                                <div className="desc">{this.props.userInfo.name || ''}</div>
                                <img className="icon-more" src={require("@/img/ico-more1.png")} alt="" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="li-box">
                            <div className="name">手机号</div>
                            <div className="right">
                                <div className="desc">13800138000</div>
                                <img className="icon-more" src={require("@/img/ico-more1.png")} alt="" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="li-box">
                            <div className="name">云账号</div>
                            <div className="right">
                                <img className="icon-more" src={require("@/img/ico-more1.png")} alt="" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="li-box">
                            <div className="name">地址管理</div>
                            <div className="right">
                                <img className="icon-more" src={require("@/img/ico-more1.png")} alt="" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
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
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserInfo);