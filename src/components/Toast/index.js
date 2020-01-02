import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content || '内容...',
            duration: props.duration,//单位：毫秒
        };
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        let { content } = this.state;
        return ReactDOM.createPortal((
            <div className={`Toast`}>
                <div className="Toast-body">
                    <div className="content">{content}</div>
                </div>
            </div>
        ), document.body);
    }
}
//控制器
Toast.show = (props) => {
    if(document.querySelector('.Toast'))return;
    const wrapped_div = document.createElement('div');
    wrapped_div.setAttribute('id','wrapped_div');
    document.body.appendChild(wrapped_div);
    if(typeof props === 'string'){
        props = {
            content:props
        }
    }
    if(props.duration === undefined) props.duration = 2500;//设置默认的显示时间
    Toast.hide = ()=>{
        //调用关闭
        let wrapped_div = document.getElementById('wrapped_div');
        if(wrapped_div){
            ReactDOM.unmountComponentAtNode(wrapped_div);//必须销毁不再使用的组件，否则虚拟DOM树会越积越多影响性能。
            document.body.removeChild(wrapped_div);
        }
    }
    ReactDOM.render(
        <Toast
            {...props}
        ></Toast>
        , wrapped_div,()=>{
            //console.log('callback: 插入回调',props);
            let setTime = setTimeout(() => {
                let wrapped_div = document.getElementById('wrapped_div');
                if(wrapped_div !== null){
                    //调用Toast.hide();删除后，不执行这里
                    ReactDOM.unmountComponentAtNode(wrapped_div);//必须销毁不再使用的组件，否则虚拟DOM树会越积越多影响性能。
                    document.body.removeChild(wrapped_div);
                }
                clearTimeout(setTime);
            }, props.duration);
        }
    );
}


/* 
使用方式：
<Toast
    title='警告'
    content='确定执行该操作吗？'
    visible={this.state.visible} 
    onOk={this.hideToast.bind(this)} 
    onCancel={this.hideToast.bind(this)}>
</Toast>

*/
export default Toast;


