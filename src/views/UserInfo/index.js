import React, { Component } from 'react';
import './index.scss';

class UserInfo extends Component {
    render() {
        return (
            <div className="UserInfo">
                <ul>
                    <li>
                        <div className="li-box">
                            <div className="name">昵称</div>
                            <div className="right">
                                <div className="desc">爱你好心情</div>
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

export default UserInfo;