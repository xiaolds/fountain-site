import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class Banner extends Component {
    static displayName = 'Banner';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <div className="banner-content">
                    <div className="banner-title">WE BRING THE GLAMOUROUS DREAM</div>
                    <div className="banner-desc">
                        T .Y. Fountain Canada specialized in unique water shows with spectacular
                        effects. We design and creates magic with water, brining you the
                        breathtaking heart-quake!
                    </div>
                    <a className="banner-link">explore</a>
                </div>
                <div className="banner-img-wrapper">
                    <AutoPlaySwipeableViews
                        className="banner-img"
                        interval={4000}
                        containerStyle={{ height: '100%' }}
                    >
                        <div className="banner-img img1" />
                        <div className="banner-img img2" />
                        <div className="banner-img img3" />
                        <div className="banner-img img4" />
                    </AutoPlaySwipeableViews>
                </div>
            </div>
        );
    }
}
