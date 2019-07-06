import React, { Component } from 'react';
import Banner from './components/Banner';
import Introduction from './components/Introduction';
import Feature from './components/Feature';
import Solution from './components/Solution';
import Resource from './components/Resource';
import Video from './components/SimpleVideoPlayer1';

export default class HomePage extends Component {
    static displayName = 'HomePage';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div id="index" className="full-height display-flex">
                    <Banner />
                </div>
                <Introduction />
                <div id="solutions">
                    <Solution />
                </div>
                <div id="news">
                    <Resource />
                </div>
                <div id="about">
                    <Video />
                </div>
                <div id="join">
                    <Feature />
                </div>
            </div>
        );
    }
}
