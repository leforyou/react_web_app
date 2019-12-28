import React, { Component ,Fragment} from 'react';
import { withRouter } from 'react-router-dom';//高阶组件将react-router的history、location、match三个对象绑定到this.props。
import NavigationBar from './../../components/NavigationBar/index';


import './index.scss';

class Customer extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    componentDidMount(){
        //获取react-router的history、location、match三个对象传入
        console.log('react-router:',this.props);
    }
    render() {
        return (
            <Fragment>
                <div className="Customer">
                    <div className="bg">
                        <img src="/img/bg1.png" alt=""/>
                    </div>
                    <div className="people">
                        <img src="/img/customer-pic.png" alt=""/>
                    </div>
                    <div className="customer padding-lr">
                        <div className="box">
                            <div className="info">
                                <div className="sub-title f36 bold">楼无忧客服中心</div>
                                <div className="desc c666">客服在线时间</div>
                                <div className="desc c666">周一至周日 9:00-18:00</div>
                            </div>
                        </div>
                    </div>
                    <div className="button-ground">
                        <div className="button-primary">联系在线客服</div>
                    </div>
                </div>
                {/* <NavigationBar activeNum={1}></NavigationBar> 普通组件 */}
            </Fragment>
        );
    }
}

export default NavigationBar(withRouter(Customer),1);//高阶组件的使用