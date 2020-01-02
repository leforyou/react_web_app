import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Toast from '@/components/Toast/index';

class ChangeNickNameLayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:''
        };
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    close(){
        //关闭
        let dom = document.querySelector('.ChangeNickNameLayer');
        dom.classList.remove('active');
        dom.addEventListener('transitionend',function(){
            ChangeNickNameLayer.hide();
        });
    }
    confirm(){
        //确认
        let {value} = this.state;
        if(value === ''){
            return Toast.show('昵称不能为空！');
        }
        this.close();
    }
    render() {
        return ReactDOM.createPortal((
            <div className="ChangeNickNameLayer">
                <div className="container">
                    <div className="box">
                        <div className="head">修改昵称</div>
                        <div className="middle">
                            <div className="desc">最多支持16个字符</div>
                            <div className="input-box">
                                <input type="text" value={this.state.value} placeholder="请输入内容" maxLength="16" onChange={e=>this.setState({value:e.target.value})}/>
                            </div>
                        </div>
                        <div className="foot">
                            <div className="cancel" onClick={this.close.bind(this)}>取消</div>
                            <div className="sure" onClick={this.confirm.bind(this)}>确定</div>
                        </div>
                    </div>
                </div>
            </div>
        ), document.body);
    }
}
//控制器
ChangeNickNameLayer.show = (props) => {
    const wrapped = document.createElement('div');
    wrapped.setAttribute('id','wrapped');
    document.body.appendChild(wrapped);

    ChangeNickNameLayer.hide = ()=>{
        //调用关闭
        let wrapped = document.getElementById('wrapped');
        if(wrapped){
            ReactDOM.unmountComponentAtNode(wrapped);//必须销毁不再使用的组件，否则虚拟DOM树会越积越多影响性能。
            document.body.removeChild(wrapped);
        }
    }
    ReactDOM.render(
        <ChangeNickNameLayer></ChangeNickNameLayer>
        , wrapped,()=>{
            //console.log('callback: 插入回调',props);
            let setTime = setTimeout(() => {
                document.querySelector('.ChangeNickNameLayer').classList.add('active');
                clearTimeout(setTime);
            }, 0);
        }
    );
}


/* 
使用方式：
ChangeNickNameLayer.show();

*/
export default ChangeNickNameLayer;


