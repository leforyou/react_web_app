import React, { Component } from 'react';
import './index.scss';
/* 
https://github.com/ustbhuangyi/better-scroll
https://better-scroll.github.io/docs/zh-CN/
npm install better-scroll@next -S
npm install @better-scroll/pull-down@next --save
npm install @better-scroll/pull-up@next --save
*/
import BScroll from '@better-scroll/core';//BScroll
import PullDown from '@better-scroll/pull-down';//BScroll的插件
import Pullup from '@better-scroll/pull-up';//BScroll的插件
BScroll.use(PullDown);
BScroll.use(Pullup);


function getOneRandomList(step = 0) {
    const arr = Array.apply(null, { length: (30 + step) }).map((...args) => args[1])
    return arr.sort(() => Math.random() - 0.5)
}

const TIME_BOUNCE = 800;
let STEP = 0;

class BetterScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beforePullDown: true,
            isPullingDown: false,
            dataList: getOneRandomList(),
            bscroll: null,
            downTip:'下拉刷新',
            pullDownRefresh_threshold:70,
        };
    }
    componentDidMount() {
        this.initBscroll();
    }
    componentWillUnmount() {

    }
    /* createBscroll(){
        new BScroll('.pulldown', {
            //scrollY: true,
            pullUpLoad: true,
            pullDownRefresh: true
        })
    }
    getListData() {
        //获取列表数据
        let arr = [];
        for (let i = 0; i < 30; i++) {
            arr.push({
                image:require('@/img/system-registers-HUAWEIYUN.png'),
                corpName:'华为公司',
                id:i+1
            });
        }
        let {listArr} = this.state;
        this.setState({
            listArr:res.result.content
        });
    } */

    initBscroll() {
        let {pullDownRefresh_threshold} = this.state;
        let bscroll = new BScroll('.wrap-bscroll', {
            bounceTime: TIME_BOUNCE,//设置回弹动画的动画时长
            pullDownRefresh: {
                threshold: pullDownRefresh_threshold,//配置顶部下拉的距离来决定刷新时机
                stop: 56//回弹停留的距离
            }
        });
        this.setState({ bscroll });

        bscroll.on('pullingDown', this.pullingDown.bind(this));
        bscroll.on('scroll', this.scrollHandler.bind(this));
        bscroll.on('scrollEnd', ()=>{
            console.log('scrollEnd88888888888888888888888888')


            /* this.setState({
                downTip:'下拉刷新'
            }); */
            let setTime = setTimeout(() => {
                this.setState({
                    isPullingDown: false,
                    downTip:'下拉刷新'
                });
                //this.state.bscroll.refresh();//重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
                clearTimeout(setTime);
            }, TIME_BOUNCE);
            //this.state.bscroll.refresh();//重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
        });
    }
    scrollHandler(pos) {
        console.log(pos.y);
        let {pullDownRefresh_threshold} = this.state;
        if(pos.y >= pullDownRefresh_threshold && this.state.isPullingDown === false){
            this.setState({downTip:'释放刷新'});
        }
        if(pos.y < pullDownRefresh_threshold && this.state.isPullingDown === false){
            this.setState({downTip:'下拉刷新'});
        }
    }
    async pullingDown() {
        //当顶部下拉的距离大于 threshold 值时，触发一次 pullingDown 钩子。
        this.setState({downTip:'加载中。。。'});
        console.log('88888888888888888888888888888888888888888888888')
        this.setState({
            beforePullDown: false,
            isPullingDown: true,
        });
        STEP += 10;

        await this.requestData();

        
        //this.finishPullDown();
        this.state.bscroll.finishPullDown();
        /* this.setState({
            isPullingDown: false,
        }); */
        /* let setTime = setTimeout(() => {
            this.setState({
                downTip:'下拉刷新'
            });
            this.state.bscroll.refresh();//重新计算 BetterScroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
            clearTimeout(setTime);
        }, TIME_BOUNCE + 1000); */
    };
    /* async finishPullDown() {
        //结束下拉动作
        await new Promise(resolve => {
            setTimeout(() => {
                this.state.bscroll.finishPullDown();
                resolve();
            }, 600)
        })
        setTimeout(() => {
            this.setState({
                beforePullDown: true
            });
            this.state.bscroll.refresh()
        }, TIME_BOUNCE)
    } */
    async requestData() {
        try {
            const newData = await this.ajaxGet(/* url */)
            this.dataList = newData
        } catch (err) {
            // handle err
            console.log(err)
        }
    }
    ajaxGet(/* url */) {
        return new Promise(resolve => {
            setTimeout(() => {
                const dataList = getOneRandomList(STEP)
                resolve(dataList)
            }, 1000)
        })
    }
    render() {
        let { dataList,downTip,beforePullDown ,isPullingDown} = this.state;
        return (
            <div className="BetterScroll">
                <div className="wrap-bscroll" id="wrap-scroll">
                    <div className="bscroll-box">
                        {/* <div className="head-pulldown">
                            <div style={{'display':beforePullDown?'block':'none'}}>释放刷新</div>
                            <div style={{'display':!beforePullDown?'block':'none'}}>
                                <div style={{'display':isPullingDown?'block':'none'}}>加载中 ...</div>
                                <div style={{'display':!isPullingDown?'block':'none'}}>刷新成功</div>
                            </div>
                        </div> */}
                        <div className="downwarp-content">
                            <p className={`downwarp-progress ${isPullingDown?'mescroll-rotate':''}`} style={{transform:'rotate(58.5deg)'}}></p>
                            <p className="downwarp-tip">{downTip || '下拉刷新'}</p>
                        </div>
                        <ul className="content-ul">
                            {
                                dataList.map((item, index) => {
                                    return (
                                        <li className="pulldown-list-item" key={index}>
                                            {`I am item ${index} `}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div >
        );
    }
}


export default BetterScroll;


