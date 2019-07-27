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
            activeKey: this.setActiveKey()
        };
    }

    setActiveKey = () => {
        return (
            (sessionStorage && sessionStorage.getItem('ty-fountain-service')) ||
            (this.isServicePage() ? 'Fountain Design' : 'Home Fountain')
        );
    };

    isServicePage = () => {
        const hash = window.location.hash;
        const search = hash.substring(hash.indexOf('?'));
        return search.indexOf('solutions') > -1;
    };

    componentDidMount() {
        this.ref.scrollIntoView();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.search !== this.props.location.search) {
            this.setState({
                activeKey: this.setActiveKey()
            });
            this.ref.scrollIntoView();
        }
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
        const configData = this.isServicePage() ? config.data : config.productDatas;

        return (
            <div>
                <Header />
                <div className="service-detail-wrapper" ref={el => (this.ref = el)}>
                    <div className="tab-wrapper">
                        <Tab
                            tabPosition="left"
                            shape="wrapped"
                            animation={false}
                            onChange={this.onChange}
                            activeKey={activeKey}
                        >
                            {configData.map(item => (
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
