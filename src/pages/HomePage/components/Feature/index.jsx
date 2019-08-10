import React, { Component } from 'react';
import { Grid } from '@alifd/next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import config from '../../../../common/config';

const { Row, Col } = Grid;

export default class Feature extends Component {
    static displayName = 'Feature';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={styles.container}>
                <Row wrap style={styles.content}>
                    {config.ContactData.map((item, index) => {
                        return (
                            <Col xxs="12" s="6" l="6" key={index} style={styles.item}>
                                <FontAwesomeIcon icon={item.pic} className="icon" size="2x" />
                                <h3 style={styles.title}>{item.title}</h3>
                                {item.desc && <p style={styles.desc}>{item.desc}</p>}
                                {item.render && <p style={styles.render}>{item.render()}</p>}
                            </Col>
                        );
                    })}
                </Row>
            </div>
        );
    }
}

const styles = {
    container: {
        padding: '80px 80px',
        background: '#F6F7F9'
    },
    content: {
        margin: '0 auto'
    },
    item: {
        textAlign: 'center',
        padding: '10px 20px'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '20px'
    },
    desc: {
        lineHeight: '22px',
        fontSize: '20px',
        color: '#999'
    },
    render: {
        fontSize: '20px',
        fontWeight: 400,
        color: '#3080fe'
    }
};
