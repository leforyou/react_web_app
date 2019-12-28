import React, { Component,Fragment } from 'react';
import { withRouter } from 'react-router-dom';//高阶组件将react-router的history、location、match三个对象绑定到this.props。
import NavigationBar from './../../components/NavigationBar/index';


import './index.scss';

class Partners extends Component {
    constructor(props){
        super(props);
        this.state={
            listArr:[],
            pageNumber: 1,
            pageSize: 40,
        };
        // console.log(this.state);
        // console.log(this.props);
    }
    
    componentDidMount() {
        //alert("componentDidMount");
        console.log('react-router:',this.props);
        this.getListData();
    }

    getListData() {
        //获取列表数据
        let {pageNumber,pageSize} = this.state;
        this.axios.get('/appWx/ContentPartner/getPageList',{pageNumber,pageSize}).then(res=>{
            if(res.code === 200){
                this.setState({
                    listArr:res.result.content
                });
            }
        });
    }


    shouldComponentUpdate() {
        //alert("shouldComponentUpdate");
        return true;        // 记得要返回true
    }
    componentDidUpdate() {
        //alert("componentDidUpdate");
    }
    loadFunc(){
        console.log(8888888);
        //this.getListData();
    }
    render() {
        //let listArr = this.state;
        return (
            <Fragment>
                <div className="Partner padding-lr">
                    <ul>
                        {
                            this.state.listArr.length > 0 
                            ?this.state.listArr.map((item,index)=>{
                                return (
                                    <li key={item.id}>
                                        <div className="li-box">
                                            <img src={item.image} alt="图片"/>
                                            <div className="desc ellipsis1">{item.corpName}</div>
                                        </div>
                                    </li>
                                )
                            })
                            :<li className="text-center c666 f14" style={{width:'100%',lineHeight:2}}>暂无相关的内容！</li>
                        }
                    </ul>
                </div>
                {/* <NavigationBar activeNum={2}></NavigationBar> 普通组件 */}
            </Fragment>
        );
    }
}

export default NavigationBar(withRouter(Partners),2);//高阶组件的使用