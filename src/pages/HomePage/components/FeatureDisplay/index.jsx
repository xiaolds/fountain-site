import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../../../../common/config';

const { Row, Col } = Grid;

export default class FeatureDisplayFeatureDisplay extends Component {
    static displayName = 'FeatureDisplay';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    limitCharts = charts => {
        if (charts.length > 160) {
            charts = charts.substring(0, 160) + '...';
        }
        return charts;
    };

    handleGoService = (title) => {
        sessionStorage && sessionStorage.setItem('ty-fountain-service', title)
    }

    render() {
        return (
            <div className="pt100">
                <p className="page-title">Services & Solutions</p>
                <div className={styles.container}>
                    <div className={styles.items}>
                        <Row gutter="20" wrap>
                            {config.data.map((item, index) => {
                                return (
                                    <Col key={index} xxs="24" s="12" l="8">
                                        <div className={styles.item}>
                                            <FontAwesomeIcon
                                                icon={item.icon}
                                                className="icon"
                                                size="2x"
                                            />
                                            <h3 className={styles.title}>{item.title}</h3>
                                            <p className="description">
                                                {this.limitCharts(item.description)}
                                            </p>
                                            <a className="link" href="#service" onClick={()=>this.handleGoService(item.title)}>
                                                More
                                            </a>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}
