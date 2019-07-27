import React, { Component } from 'react';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

const dataSource = [
    {
        title: 'Location',
        pic: faLocationArrow,
        desc: 'LocationLocationLocation'
    },
    {
        title: 'mail',
        pic: faEnvelope,
        desc: 'mailmailmailmailmailmail'
    },
    {
        title: 'phone',
        pic: faPhoneAlt,
        desc: 'phonephonephonephonephone'
    },
    {
        title: 'Time',
        pic: faClock,
        desc: 'Workday 9am ~ 5pm'
    }
];

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
                    {dataSource.map((item, index) => {
                        return (
                            <Col xxs="12" s="6" l="6" key={index} style={styles.item}>
                                <h3 style={styles.title}>{item.title}</h3>
                                <p style={styles.desc}>{item.desc}</p>
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
        padding: '80px 0',
        background: '#F6F7F9'
    },
    content: {
        margin: '0 auto'
    },
    item: {
        textAlign: 'center',
        padding: '10px 20px'
    },
    pic: {
        width: '80px',
        marginBottom: '30px'
    },
    title: {
        fontWeight: 'bold'
    },
    desc: {
        lineHeight: '22px',
        color: '#999'
    }
};
