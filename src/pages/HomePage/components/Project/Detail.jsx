import React, { Component } from 'react';
import ProjectList from './index';
import SwipeableViews from 'react-swipeable-views';

import Header from '../../../../layouts/BlankLayout/components/Header';
import Footer from '../../../../layouts/BlankLayout/components/Footer';
import config from '../../../../common/config';

export default class ProjectDetail extends Component {
    static displayName = 'ProjectDetail';

    constructor(props) {
        super(props);
        this.activeKey = this.setActiveKey();
        this.state = {
            index: 0,
            showData: this.getShowData(this.activeKey)
        };
    }

    setActiveKey = () => {
        return (
            (sessionStorage && sessionStorage.getItem('ty-fountain-project')) ||
            config.projectsData[0].title
        );
    };

    getShowData = (activeKey) => {
        return config.projectsData.filter(item => item.title === activeKey)[0] || {};
    };

    componentDidMount() {
        this.ref.scrollIntoView();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
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

    setProps = (activeKey) => {
        if (activeKey !== this.activeKey) {
            this.activeKey = activeKey;
            this.setState({showData: this.getShowData(this.activeKey)})
        }
    }

    render() {
        const { index, activeKey, showData } = this.state;
        const imgs = showData.imgs || [];
        console.log(imgs);
        return (
            <div>
                <Header />
                <div>
                    <div className="project-head light-bg" ref={el => (this.ref = el)}>
                        <span className="project-title">{showData.title}</span>
                    </div>
                    <div className="project-content">
                        <SwipeableViews
                            index={index}
                            containerStyle={{ height: '100%' }}
                            className="project-detail-slider"
                        >
                            {imgs.map(img => (
                                <div key={img} className={`service-detail-img ${img}`} />
                            ))}
                        </SwipeableViews>
                        <div className="pagination">{this.renderPagination(imgs.length)}</div>
                    </div>
                </div>
                <ProjectList setProps={this.setProps}/>
                <Footer />
            </div>
        );
    }
}
