import React, { Component } from 'react';
import Banner from './components/Banner';
import Introduction from './components/Introduction';
import FeatureDisplay from './components/FeatureDisplay';
import SlideBanner from './components/SlideBanner';

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
                <div id="products">
                    <SlideBanner />
                </div>
                <div id="services">
                    <FeatureDisplay />
                </div>
                <div id="about">
                    <Introduction />
                </div>
            </div>
        );
    }
}
