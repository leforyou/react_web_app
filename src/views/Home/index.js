import React, { Component,Fragment } from 'react';

import NavigationBar from './../../components/NavigationBar/index';

import './index.scss';


class Home extends Component {
    render() {
        return (
            <Fragment>
                <div className="Home">
                    我是首页！你们好吗？
                </div>
                <NavigationBar activeNum={0}></NavigationBar>
            </Fragment>
        );
    }
}

export default Home;