import React, { Component } from 'react';
import { Tab } from '@alifd/next';
import SwipeableViews from 'react-swipeable-views';

import Header from '../../../../layouts/BlankLayout/components/Header';
import Footer from '../../../../layouts/BlankLayout/components/Footer';
import config from '../../../../common/config';

export default class Resource extends Component {
    static displayName = 'Resource';

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            activeKey:
                (sessionStorage && sessionStorage.getItem('ty-fountain-service')) ||
                'Fountain Design'
        };
    }

    componentDidMount() {
        this.ref.scrollIntoView();
        sessionStorage && sessionStorage.getItem('ty-fountain-service');
    }

    renderPagination = total => {
        const { index } = this.state;
        if (total === 1) return;
        return Array.from({ length: total }).map((x, ind) => {
            const active = index === ind ? 'active' : '';
            return (
                <span
                    className={`page-dot ${active}`}
                    key={ind}
                    onClick={() => this.setState({ index: ind })}
                />
            );
        });
    };

    onChange = activeKey => {
        this.setState({ index: 0, activeKey });
    };

    render() {
        const { index, activeKey } = this.state;
        return (
            <div>
                <Header />
                <div className="service-detail-wrapper" ref={el => (this.ref = el)}>
                    <div className="tab-wrapper">
                        <Tab
                            tabPosition="left"
                            shape="wrapped"
                            onChange={this.onChange}
                            activeKey={activeKey}
                        >
                            {config.data.map(item => (
                                <Tab.Item title={item.title} key={item.title}>
                                    <SwipeableViews
                                        index={index}
                                        containerStyle={{ height: '100%' }}
                                        className="service-detail-slider"
                                    >
                                        {item.imgs.map(img => (
                                            <div
                                                key={img}
                                                className={`service-detail-img ${img}`}
                                            />
                                        ))}
                                    </SwipeableViews>
                                    <div className="pagination">
                                        {this.renderPagination(item.imgs.length)}
                                    </div>
                                    <div className="service-detail-context">
                                        <p className="page-title">{item.title}</p>
                                        <p className="description p16 ft16">{item.description}</p>
                                    </div>
                                </Tab.Item>
                            ))}
                        </Tab>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
