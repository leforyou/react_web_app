import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './index.scss';


class index extends Component {
    constructor(props){
        super(props);
        this.state={};
        // console.log(this.state);
        // console.log(this.props);
    }
    
    componentDidMount() {
        //alert("componentDidMount");
    }


    shouldComponentUpdate() {
        //alert("shouldComponentUpdate");
        return true;        // 记得要返回true
    }
    componentDidUpdate() {
        //alert("componentDidUpdate");
    }

    componentWillUnmount() {
        //alert("componentWillUnmount");
    }
    render() {
        let {activeNum} = this.props;
        return (
            <div className="NavigationBar">
                <div className="box">
                    <ul>
                        <li className={activeNum===0?'active':''}>
                            <NavLink to="/">
                                <img src={`/img/tab-home${activeNum!==0?'1':'2'}.png`} alt=""/>
                                <div className="desc">首页</div>
                            </NavLink>
                        </li>
                        <li className={activeNum===1?'active':''}>
                            <NavLink to="/Customer">
                                <img src={`/img/tab-customer${activeNum!==1?'1':'2'}.png`} alt=""/>
                                <div className="desc">客服</div>
                            </NavLink>
                        </li>
                        <li className={activeNum===2?'active':''}>
                            <NavLink to="/Partners">
                                <img src={`/img/tab-partner${activeNum!==2?'1':'2'}.png`} alt=""/>
                                <div className="desc">合作商</div>
                            </NavLink>
                        </li>
                        <li className={activeNum===3?'active':''}>
                            <NavLink to="/user/666">
                                <img src={`/img/tab-user${activeNum!==3?'1':'2'}.png`} alt=""/>
                                <div className="desc">个人中心</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default index;