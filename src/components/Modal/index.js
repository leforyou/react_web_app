import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible || false,
            id: props.id || `modal-id-${(new Date()).getTime()}`,//通过时间戳生成唯一的ID
            title: props.title || '',
            content: props.content || '内容...',
            okText: props.okText || '确定',
            cancelText: props.cancelText || '取消',
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
        let {visible,title,content,okText,cancelText} = this.state;
        let {type} = this.props;
        let class_name1 = `Modal-Way1 ${visible && type === undefined ? 'active' : ''}`;
        let class_name2 = `Modal-Way2 ${visible && type !== undefined ? 'modal-show' : 'modal-hide'}`;
        let class_name = type === undefined ? class_name1:class_name2;
        return ReactDOM.createPortal((
            <div id={this.state.id} className={`Modal ${class_name}`}>
                <div className="Modal-body">
                    {/* <div className="title" style={{display:title===''?'none':'block'}}>{title}</div>   如果您使用过度display: 'none'，则会导致DOM污染，并最终减慢您的应用程序的速度。*/}
                    {/* {title !=='' ? <div className="title">{title}</div> : null } */}
                    {title !=='' && <div className="title">{title}</div>}
                    <div className="content">{content}</div>
                    <div className="foot">
                        <div className="button" onClick={this.onCancelClick}>{cancelText}</div>
                        <div className="button" onClick={this.onOkClick}>{okText}</div>
                    </div>
                </div>
            </div>
        ), document.body);
    }
}
//控制器
Modal.confirm = (props) => {
    let id = `modal-id-${(new Date()).getTime()}`//通过时间戳生成唯一的ID;
    const wrapped_div = document.createElement('div');
    document.body.appendChild(wrapped_div);
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
        let Modal_DOM = document.getElementById(id);
        Modal_DOM.classList.remove('modal-show');
        Modal_DOM.classList.add('modal-hide');
        Modal_DOM.addEventListener('animationend',function(e){
            if(e.target === Modal_DOM) { //【e.target === this】【e.target === e.currentTarget】
                //对于animationend事件来说的话，如果我们在外层添加这个事件监听，如果监听元素里面还有动画，则里面元素动画结束也会执行这个animationend事件。
                ReactDOM.unmountComponentAtNode(wrapped_div);//必须销毁不再使用的组件，否则虚拟DOM树会越积越多影响性能。
                document.body.removeChild(wrapped_div);
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
        , wrapped_div,()=>{
            //console.log('callback: 插入回调');
        }
    );
}

/* 
使用方式：
1.组件
<Modal
    title='警告'
    content='确定执行该操作吗？'
    visible={this.state.visible} 
    onOk={this.hideModal.bind(this)} 
    onCancel={this.hideModal.bind(this)}>
</Modal>

-------------------------------------------------------------------------------

2.JS方式调用
Modal.confirm({
    title:'温馨提示',
    content:'你确定要删除该内容吗？',
    okText:'确定',
    cancelText:'取消',
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


