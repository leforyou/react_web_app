import React, { Component,Fragment } from 'react';

import NavigationBar from './../../components/NavigationBar/index';
import Toast from './../../components/Toast/index';

import './index.scss';




class Home extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        
    }
    show(){
        Toast.show('你点我干嘛！');
    }
    render() {
        return (
            <Fragment>
                <div className="Home">
                    我是首页！你们好吗？
                </div>
                <button onClick={this.show.bind(this)}>111111111</button>
                {/* <Toast></Toast> */}
                {/* <NavigationBar activeNum={0}></NavigationBar> 普通组件 */}
            </Fragment>
        );
    }
}

export default NavigationBar(Home,0);//高阶组件的使用