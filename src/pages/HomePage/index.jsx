import React, { Component } from 'react';
import Banner from './components/Banner';
import Introduction from './components/Introduction';
import FeatureDisplay from './components/FeatureDisplay';
import SlideBanner from './components/SlideBanner';

export default class HomePage extends Component {
    static displayName = 'HomePage';

    constructor(props) {
        super(props);
        this.ref = {};
    }

    componentDidMount() {
        const hash = document.location.hash.substring(2);
        this.ref[hash] && this.ref[hash].scrollIntoView();
    }

    render() {
        return (
            <div>
                <div
                    id="index"
                    className="full-height display-flex"
                    ref={el => (this.ref.index = el)}
                >
                    <Banner />
                </div>
                <div id="products" ref={el => (this.ref.products = el)}>
                    <SlideBanner />
                </div>
                <div id="services" ref={el => (this.ref.services = el)}>
                    <FeatureDisplay />
                </div>
                <div id="about" ref={el => (this.ref.about = el)}>
                    <Introduction />
                </div>
            </div>
        );
    }
}
