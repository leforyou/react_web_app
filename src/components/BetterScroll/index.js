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
const TIME_STOP = 600;
let STEP = 0;

class BetterScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beforePullDown: true,
            isPullingDown: false,
            dataList: getOneRandomList(),
            bscroll: null
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
        let bscroll = new BScroll('.pulldown-bswrapper', {
            bounceTime: TIME_BOUNCE,
            pullDownRefresh: {
                threshold: 70,//配置顶部下拉的距离来决定刷新时机
                stop: 56//回弹停留的距离
            }
        });
        this.setState({ bscroll });

        bscroll.on('pullingDown', this.pullingDownHandler.bind(this));
        bscroll.on('scroll', this.scrollHandler.bind(this));
    }
    scrollHandler(pos) {
        console.log(pos.y)
    }
    async pullingDownHandler() {
        this.setState({
            beforePullDown: false,
            isPullingDown: true,
        });
        STEP += 10

        await this.requestData();

        this.setState({
            isPullingDown: false,
        });
        this.finishPullDown();
    };
    async finishPullDown() {
        const stopTime = TIME_STOP;
        await new Promise(resolve => {
            setTimeout(() => {
                this.state.bscroll.finishPullDown();
                resolve();
            }, stopTime)
        })
        setTimeout(() => {
            this.setState({
                beforePullDown: true
            });
            this.state.bscroll.refresh()
        }, TIME_BOUNCE)
    }
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
        let { dataList,beforePullDown ,isPullingDown} = this.state;
        return (
            <div className="BetterScroll">
                <div className="pulldown">
                    <div ref="bsWrapper" className="pulldown-bswrapper">
                        <div className="pulldown-scroller">
                            <div className="pulldown-wrapper">
                                <div v-show="beforePullDown" style={{'display':beforePullDown?'block':'none'}}>
                                    <span>释放刷新</span>
                                </div>
                                <div v-show="!beforePullDown" style={{'display':!beforePullDown?'block':'none'}}>
                                    <div v-show="isPullingDown" style={{'display':isPullingDown?'block':'none'}}>
                                        <span>加载中 ...</span>
                                    </div>
                                    <div v-show="!isPullingDown" style={{'display':!isPullingDown?'block':'none'}}><span>刷新成功</span></div>
                                </div>
                            </div>
                            <ul className="pulldown-list">
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
                </div>
            </div >
        );
    }
}


export default BetterScroll;


