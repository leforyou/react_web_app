import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
/* 
高价组件的应用。
如果要使用普通组件：
1.将删除【let NavigationBar = (WrappedComponent,activeNum)=> 】【<WrappedComponent></WrappedComponent>】
2.let { activeNum } = this.props;去掉它的单行注释。
3.在首页中render函数中，添加<NavigationBar activeNum={0}></NavigationBar>
*/
let NavigationBar = (WrappedComponent,activeNum)=> class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
    goLink1(){
        //注意：Customer组件使用withRouter高阶组件来连接react-router，这样它才能通过this.props.location.search获取参数
        this.props.history.replace({pathname:'/Customer',search:'sort=name&age=18'});//方式一
        //this.props.history.push({pathname:'/Customer',search:'?sort=name'});//方式一
        //this.props.history.push({pathname:'/Customer',state:{name:'客服001'}});//方式二
    }
    goLink2(){
        this.props.history.replace('/Partners/8888');
    }
    render() {
        //let { activeNum } = this.props;//父组件向子组件传递的参数
        return (
            <Fragment>
                <WrappedComponent></WrappedComponent>
                <div className="NavigationBar">
                    <div className="box">
                        <ul>
                            <li className={activeNum === 0 ? 'active' : ''}>
                                <NavLink to="/" replace>
                                    <img src={`/img/tab-home${activeNum !== 0 ? '1' : '2'}.png`} alt="" />
                                    <div className="desc">首页</div>
                                </NavLink>
                            </li>
                            <li className={activeNum === 1 ? 'active' : ''}>
                                <div onClick={this.goLink1.bind(this)}>
                                    <img src={`/img/tab-customer${activeNum !== 1 ? '1' : '2'}.png`} alt="" />
                                    <div className="desc">客服</div>
                                </div>
                            </li>
                            <li className={activeNum === 2 ? 'active' : ''}>
                                <div onClick={this.goLink2.bind(this)}>
                                    <img src={`/img/tab-partner${activeNum !== 2 ? '1' : '2'}.png`} alt="" />
                                    <div className="desc">合作商</div>
                                </div>
                            </li>
                            <li className={activeNum === 3 ? 'active' : ''}>
                                <NavLink to="/user/666" replace>
                                    <img src={`/img/tab-user${activeNum !== 3 ? '1' : '2'}.png`} alt="" />
                                    <div className="desc">个人中心</div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default NavigationBar;