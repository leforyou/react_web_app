import React, { Component,Fragment } from 'react';

import NavigationBar from './../../components/NavigationBar/index';
import Modal from './../../components/Modal/index';


import './index.scss';




class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible:false
        };
    }
    componentDidMount(){
        
    }
    confirm(){
        Modal.confirm({
            onOk:()=>{
                //do something code
            },
            onCancel:()=>{
                //do something code
                console.log('Modal.confirm---oncancel');
            }
        });
    }
    hideModal(){
        this.setState({
            visible:false
        },()=>{
            //console.log(this.state);
        });
    }
    showModal(){
        this.setState({
            visible:true
        },()=>{
            //console.log(this.state);
        });
    }
    render() {
        return (
            <Fragment>
                <div className="Home">
                    我是首页！你们好吗？
                </div>
                <br/>
                <button onClick={this.showModal.bind(this)}>组件1</button>
                <br/>
                <button onClick={this.confirm.bind(this)}>组件2</button>
                <Modal
                    visible={this.state.visible}
                    onOk={this.hideModal.bind(this)}
                    onCancel={this.hideModal.bind(this)}
                ></Modal>
                {/* <NavigationBar activeNum={0}></NavigationBar> 普通组件 */}
            </Fragment>
        );
    }
}

export default NavigationBar(Home,0);//高阶组件的使用