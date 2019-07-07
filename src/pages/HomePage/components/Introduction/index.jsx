import React, { Component } from 'react';
import Feature from '../Feature';

export default class Introduction extends Component {
    static displayName = 'Introduction';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={styles.container}>
                <p className="page-title">About Us</p>
                <p style={styles.desc}>
                    `blahblahblahblahblahblahblahblahblahblahblahblahblahblahblah`
                </p>
                <p style={styles.desc}>
                    `blahblahblahblahblahblahblahblahblahblahblahblahblahblahblah`
                </p>
                <p style={styles.desc}>
                    `blahblahblahblahblahblahblahblahblahblahblahblahblahblahblah`
                </p>
                <Feature />
            </div>
        );
    }
}

const styles = {
    container: {
        margin: '0 auto',
        padding: '80px 0'
    },
    title: {
        color: 'rgba(0,0,0,0.8)',
        lineHeight: '38px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '40px',
        margin: '0 0 24px'
    },
    desc: {
        color: 'rgba(0,0,0,.6)',
        fontSize: '14px',
        lineHeight: '30px',
        textAlign: 'center',
    }
};
