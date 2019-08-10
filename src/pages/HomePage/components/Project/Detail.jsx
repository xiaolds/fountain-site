import React, { Component } from 'react';
import { Grid } from '@alifd/next';

import ProjectList from './index';
import SwipeableViews from 'react-swipeable-views';

import Header from '../../../../layouts/BlankLayout/components/Header';
import Footer from '../../../../layouts/BlankLayout/components/Footer';
import config from '../../../../common/config';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons/faLocationArrow';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { faPalette } from '@fortawesome/free-solid-svg-icons/faPalette';

const { Row, Col } = Grid;

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

    getShowData = activeKey => {
        return config.projectsData.filter(item => item.title === activeKey)[0] || {};
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

    setProps = activeKey => {
        if (activeKey !== this.activeKey) {
            this.activeKey = activeKey;
            this.setState({ showData: this.getShowData(this.activeKey), index: 0 });
        }
        this.ref.scrollIntoView();
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

    render() {
        const { index, showData } = this.state;
        const imgs = showData.imgs || [];
        const len = imgs.length;

        return (
            <div>
                <Header />
                <div>
                    <div className="project-head light-bg" ref={el => (this.ref = el)}>
                        <span className="project-title">{showData.title}</span>

                        <Row wrap className="w960 main-wrapper mt16">
                            <Col xxs="12" s="8" l="8">
                                <FontAwesomeIcon icon={faClock} className="icon" />
                                <span className="ft16">{showData.time}</span>
                            </Col>
                            <Col xxs="12" s="8" l="8">
                                <FontAwesomeIcon icon={faLocationArrow} className="icon" />
                                <span className="ft16">{showData.location}</span>
                            </Col>
                            {showData.feature && (
                                <Col xxs="12" s="8" l="8">
                                    <FontAwesomeIcon icon={faPalette} className="icon" />
                                    <span className="ft16">{showData.feature}</span>
                                </Col>
                            )}
                        </Row>
                    </div>
                    <div className="project-content">
                        <div className="slider-wrapper w1300 main-wrapper">
                            <SwipeableViews
                                index={index}
                                containerStyle={{ height: '100%' }}
                                className="project-detail-slider"
                            >
                                {imgs.map(img => (
                                    <div key={img} className={`service-detail-img ${img}`} />
                                ))}
                            </SwipeableViews>
                            <div className="pre-icon" onClick={() => this.toPre(len)} />
                            <div className="next-icon" onClick={() => this.toNext(len)} />
                            <div className="pagination">{this.renderPagination(imgs.length)}</div>
                        </div>
                    </div>
                </div>
                <ProjectList setProps={this.setProps} />
                <Footer />
            </div>
        );
    }
}
