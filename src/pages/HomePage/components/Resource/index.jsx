import React, { Component } from 'react';
import { Tab } from '@alifd/next';
import SwipeableViews from 'react-swipeable-views';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        const pageType = this.isServicePage() ? 'ty-fountain-service' : 'ty-fountain-product';
        const defaultKey = this.isServicePage() ? 'Fountain Design' : 'Home Fountain';
        return (sessionStorage && sessionStorage.getItem(pageType)) || defaultKey;
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
                activeKey: this.setActiveKey(),
                index: 0
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

    toNext = len => {
        const { index } = this.state;
        if (index === len - 1) {
            this.setState({ index: 0 });
        } else {
            this.setState({ index: index + 1 });
        }
    };

    toPre = len => {
        const { index } = this.state;
        if (index === 0) {
            this.setState({ index: len - 1 });
        } else {
            this.setState({ index: index - 1 });
        }
    };

    getData = () => {
        return this.isServicePage() ? config.data : config.productDatas;
    };

    render() {
        const { index, activeKey } = this.state;
        const configData = this.getData();

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
                                <Tab.Item
                                    title={item.title}
                                    key={item.title}
                                    className="custom-tab-item"
                                >
                                    <div className="slider-wrapper">
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
                                        <div
                                            className="pre-icon"
                                            onClick={() => this.toPre(item.imgs.length)}
                                        />
                                        <div
                                            className="next-icon"
                                            onClick={() => this.toNext(item.imgs.length)}
                                        />
                                    </div>

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
                        <div className="contact-wrapper">
                            {config.ContactData.map(item => {
                                return (
                                    !item.ignore && (
                                        <p>
                                            <FontAwesomeIcon icon={item.pic} className="icon" />
                                            {item.desc && (
                                                <span className="contact-desc">{item.desc}</span>
                                            )}
                                            {item.render && (
                                                <span className="contact-render">
                                                    {item.render()}
                                                </span>
                                            )}
                                        </p>
                                    )
                                );
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
