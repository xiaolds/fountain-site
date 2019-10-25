import React, { Component } from 'react';
import SendEmail from '../SendEmail';

export default class Introduction extends Component {
    static displayName = 'Introduction';

    constructor(props) {
        super(props);
        this.state = {};
    }

    goServiceDetail = () => {
        const origin = window.location.origin;
        window.location.href = `${origin}/#/contact`;
    };

    render() {
        return (
            <div style={styles.container}>
                <p className="page-title" onClick={this.goServiceDetail}>
                    CONTACT US
                </p>
                <SendEmail />
                <div className="contact-bg" onClick={this.goServiceDetail}>
                    <div className="w1200 main-wrapper">
                        <h1 className="contact-txt">
                            {`The BEST FOUNTAIN EXPERTS  
                          YOU EVER NEED`}
                        </h1>
                        <a href="#contact" className="banner-link">
                            CONTACT US
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        margin: '0 auto',
        padding: '80px 0 0'
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
        textAlign: 'center'
    }
};
