import React, { Component } from 'react';


class index extends Component {
    constructor(props){
        super(props);
        this.state={};//构造函数必须设置state的值，直接对象声明（不用setState方法）
        // console.log(this.state);//组件内的值
        // console.log(this.props);//父组件传来的参数
    }
    
    componentDidMount() {
        //alert("componentDidMount");
        //在这里调用ajax发起请

        //百度一下【this.setState】
        //设置相关的值
        this.setState({
            aaa:8888,
            bbb:6666
        });
        //因为this.props和this.state 可能是异步更新的，你不能依赖他们的值计算下一个state(状态)。
        this.setState({
            counter: this.state.counter + this.props.increment //这种方式可能得不到想要的值
          });
        this.setState((prevState, props) => ({
            counter: prevState.counter + props.increment 
          }));
        //异步更新,与回调函数
        this.setState(
            { data: 99999 },
            () => {
                //这里打印的是最新的state值
                console.log(this.state.data);
            }
        );
    }

    /* 确定在17版本删除的周期函数
    componentWillMount         (UNSAFE_componentWillMount的使用不推荐)
    componentWillReceiveProps
    componentWillUpdate

    新增两个周期函数
    getDerivedStateFromProps
    getSnapshotBeforeUpdate */


    /* 
    getDerivedStateProps 生命周期函数是一个静态函数，所以函数体内不能访问this。
    因为 componentWillReceiveProps 只在因为父组件而引发的Updating过程中才会被调用。而getDerivedStateFromProps在Updating和Mounting过程中都会被调用。
    还需要注意的是，同样是 Updating 过程，如果是因为自身进行的 setState 或者 forceUpdate 所引发的渲染，getDerivedStateFromProps 也不会被调用。
    */
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.translateX !== prevState.translateX) {
          return {
            translateX: nextProps.translateX,
          };
        }
        return null; /* 既然访问不到 this 了，那还怎么用 this.setState 来更新状态呢？答案是，“压根就不需要用这个方法了”，你只需要返回新的状态就行了，直接 return 出去，不需要用方法去设置。
        如果不需要更新状态，返回 null 就行了，此外，返回值的机制和使用 setState 的机制是类似的 —— 你只需要返回发生改变的那部分状态，其他的值会保留 */
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('#enter getSnapshotBeforeUpdate');
        return 'foo';/* 这函数会在render之后执行，而执行之时DOM元素还没有被更新，给了一个机会去获取DOM信息，计算得到一个snapshot，这个snapshot会作为componentDidUpdate的第三个参数传入。 */
    }


    shouldComponentUpdate(nextProps, nextState, snapshot) {
        //alert("shouldComponentUpdate");
        return true;        // 记得要返回true
    }
    componentDidUpdate(nextProps, nextState) {
        //alert("componentDidUpdate");
    }

    componentWillUnmount() {
        //alert("componentWillUnmount");
    }
    render() {
        //let {activeNum} = this.props;获取父组件传来参数
        return (
            <div className="NavigationBar">
                
            </div>
        );
    }
}

export default index;