import React, { Component,Fragment } from 'react';

import NavigationBar from './../../components/NavigationBar/index';

import './index.scss';

class index extends Component {
    constructor(props){
        super(props);
        this.state={};
        // console.log(this.state);
        // console.log(this.props);
    }
    
    componentDidMount() {
        //alert("componentDidMount");
        this.axios.get('/appWx/ContentPartner/getPageList').then(res=>{
            console.log(res);
        });
    }


    shouldComponentUpdate() {
        //alert("shouldComponentUpdate");
        return true;        // 记得要返回true
    }
    componentDidUpdate() {
        //alert("componentDidUpdate");
    }
    render() {
        return (
            <Fragment>
                <div className="Partner">
                    合作商
                </div>
                <NavigationBar activeNum={2}></NavigationBar>
            </Fragment>
        );
    }
}

export default index;