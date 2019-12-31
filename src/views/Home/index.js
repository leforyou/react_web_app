import React, { Component,Fragment } from 'react';

import NavigationBar from './../../components/NavigationBar/index';
//import Toast from './../../components/Toast/index';
import SwiperHome from './../../components/SwiperHome/index';
import Notice from './../../components/Notice/index';
import SystemCloud from './../../components/SystemCloud/index';



import './index.scss';




class Home extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        
    }
    render() {
        return (
            <Fragment>
                <div className="Home">
                    <SwiperHome/>
                    <Notice/>
                    <SystemCloud/>
                </div>                
                {/* <NavigationBar activeNum={0}></NavigationBar> 普通组件 */}
            </Fragment>
        );
    }
}

export default NavigationBar(Home,0);//高阶组件的使用