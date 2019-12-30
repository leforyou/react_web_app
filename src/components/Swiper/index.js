import React, { Component } from 'react';

//安装：npm i swiper 。官网：https://www.swiper.com.cn/download/index.html

import 'swiper/dist/css/swiper.min.css';//导入css
import swiper from 'swiper/dist/js/swiper.js';//导入对象



class Swiper extends Component {
    constructor(props){
        super(props);
        this.state = {
            arr:[]
        };
    }
    componentDidMount(){
        this.initSwiper();
    }
    initSwiper(){
        new swiper(this.swiperID, {
            pagination: {
                el: this.paginateID,
            },
        });
    }
    render() {
        return (
            <div className="Swiper">
                
            </div>
        );
    }
}

export default Swiper;