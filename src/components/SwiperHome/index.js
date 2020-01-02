import React, { Component } from 'react';

//安装：npm i swiper 。官网：https://www.swiper.com.cn/download/index.html

import './index.scss';//导入css
import 'swiper/css/swiper.css';//导入css
import Swiper from 'swiper';//导入对象



class SwiperHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                {
                    url: require('@/img/banner1.jpg')
                },
                {
                    url: require('@/img/banner2.jpg')
                },
                {
                    url: require('@/img/banner3.jpg')
                }
            ]
        };
    }
    componentDidMount() {
        this.initSwiper();
    }
    initSwiper() {
        var swiper = new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
        });
        swiper.slideTo(1);
    }
    render() {
        return (
            <div className="SwiperHome">
                <div className="box">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.arr.map((item,index)=>{
                                    return (
                                        <div className="swiper-slide" key={index}>
                                            <img src={item.url} alt="图片"/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SwiperHome;