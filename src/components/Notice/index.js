import React, { Component } from 'react';
import './index.scss';

class Notice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '楼无忧平台上线啦...'
        };
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        let {content} = this.state;
        return (
            <div className="Notice">
                <div className="box">
                    <img src={require("@/img/notice.png")} alt=""/>
                    <div className="desc">{content}</div>
                    <div className="time">2019-12-26</div>
                </div>
            </div>
        );
    }
}


export default Notice;


