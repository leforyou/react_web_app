import React, { Component } from 'react';
import './index.scss';

class SystemCloud extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div className="SystemCloud">
                <div className="box">
                    <ul>
                        <li>
                            <div className="li-box">
                                <div className="img-box">
                                    <img src="/img/system-registers-ALIYUN.png" alt=""/>
                                </div>
                                <div className="info">
                                    <div className="company">阿里云产品</div>
                                    <div className="desc">让高可用更简单</div>
                                </div>
                                <div className="experience" style={{background:"#e5641e"}}>免费体验</div>
                            </div>
                        </li>
                        <li>
                            <div className="li-box">
                                <div className="img-box">
                                    <img src="/img/system-registers-TENGXUNYUN.png" alt=""/>
                                </div>
                                <div className="info">
                                    <div className="company">腾讯云产品</div>
                                    <div className="desc">产业智变 云起未来</div>
                                </div>
                                <div className="experience" style={{background:"#0079ff"}}>免费体验</div>
                            </div>
                        </li>
                        <li>
                            <div className="li-box">
                                <div className="img-box">
                                    <img src="/img/system-registers-HUAWEIYUN.png" alt=""/>
                                </div>
                                <div className="info">
                                    <div className="company">华为云产品</div>
                                    <div className="desc">+智能 见未来</div>
                                </div>
                                <div className="experience" style={{background:"#ea020a"}}>免费体验</div>
                            </div>
                        </li>
                        <li>
                            <div className="li-box">
                                <div className="img-box">
                                    <img src="/img/system-registers-BAIDUYUN.png" alt=""/>
                                </div>
                                <div className="info">
                                    <div className="company">百度云产品</div>
                                    <div className="desc">百度智能云，计算无限可能</div>
                                </div>
                                <div className="experience" style={{background:"#1267fa"}}>免费体验</div>
                            </div>
                        </li>
                        <li>
                            <div className="li-box">
                                <div className="img-box">
                                    <img src="/img/system-registers-JINSHANYUN.png" alt=""/>
                                </div>
                                <div className="info">
                                    <div className="company">金山云产品</div>
                                    <div className="desc">全球高品质云服务专家</div>
                                </div>
                                <div className="experience" style={{background:"#ae0a02"}}>免费体验</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default SystemCloud;


