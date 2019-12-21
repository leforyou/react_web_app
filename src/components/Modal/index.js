import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible || false,
            id: props.id || `modal-id-${(new Date()).getTime()}`//通过时间戳生成唯一的ID
        };
        this.onCancelClick = this.onCancelClick.bind(this);
        this.onOkClick = this.onOkClick.bind(this);
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    static getDerivedStateFromProps(nextProps, prevState) {
        //父组件传递的值
        if (nextProps.visible !== prevState.visible) {
            return {
                visible: nextProps.visible,
            };
        }
        return null;
    }
    onCancelClick() {
        //点击取消按钮的回调
        this.props.onCancel();//调用父级的函数
        this.close();
    }
    onOkClick() {
        //点击确定按钮回调
        this.props.onOk();//调用父级的函数
        this.close();
    }
    close() {
        // 关闭弹层函数
    }
    render() {
        let {visible} = this.state;
        let {type} = this.props;
        let class_name1 = `Modal-Way1 ${visible && type === undefined ? 'active' : ''}`;
        let class_name2 = `Modal-Way2 ${visible && type !== undefined ? 'modal-show' : 'modal-hide'}`;
        let class_name = type === undefined ? class_name1:class_name2;
        return ReactDOM.createPortal((
            <div id={this.state.id} className={`Modal ${class_name}`}>
                <div className="Modal-body">
                    <div className="title">温馨提示</div>
                    <div className="content">你确定要删除该条消息吗？</div>
                    <div className="foot">
                        <div className="button" onClick={this.onCancelClick}>取消</div>
                        <div className="button" onClick={this.onOkClick}>确定</div>
                    </div>
                </div>
            </div>
        ), document.body);
    }
}
//控制器
Modal.confirm = (props) => {
    const Fragment = document.createDocumentFragment();//创建虚拟节点对象
    let id = `modal-id-${(new Date()).getTime()}`//通过时间戳生成唯一的ID;
    document.body.appendChild(Fragment);
    function confirmCancel() {
        //注意：该函数是作为一个关键过渡的桥梁
        removeDom();
        if (typeof props.onCancel === 'function') props.onCancel();//调用父级的函数
    }
    function confirmOk() {
        //注意：该函数是作为一个关键过渡的桥梁
        removeDom();
        if (typeof props.onOk === 'function') props.onOk();//调用父级的函数
    }
    function removeDom(){
        let DIV_DOM = document.getElementById(id);
        DIV_DOM.classList.remove('modal-show');
        DIV_DOM.classList.add('modal-hide');
        DIV_DOM.addEventListener('animationend',function(e){
            //console.log(this,DIV_DOM);
            if(e.target === DIV_DOM) { //【e.target === this】【e.target === e.currentTarget】
                //对于animationend事件来说的话，如果我们在外层添加这个事件监听，如果监听元素里面还有动画，则里面元素动画结束也会执行这个animationend事件。
                DIV_DOM.parentNode.removeChild(DIV_DOM);
                //this.parentNode.removeChild(this);
            }
        });
    }
    ReactDOM.render(
        <Modal
            id={id}
            type={'confirm'}
            visible={true}
            {...props}
            onCancel={confirmCancel}
            onOk={confirmOk}
        ></Modal>
        , Fragment,()=>{
            //console.log('callback: 插入回调');
        }
    );
}

/* 
使用方式：
1.组件<Modal visible={this.state.visible} onOk={this.hideModal.bind(this)} onCancel={this.hideModal.bind(this)}></Modal>
2.方式调用
Modal.confirm({
    onOk:()=>{
        //do something code
    },
    onCancel:()=>{
        //do something code
        console.log('Modal.confirm---oncancel');
    }
});
*/
export default Modal;


