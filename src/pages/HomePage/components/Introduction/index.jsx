import React, { Component } from 'react';

export default class Introduction extends Component {
    static displayName = 'Introduction';

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div style={styles.container}>
                <p className="page-title">About T.Y. Fountain</p>
                <div className="contact-bg">
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

                {/* <iframe
                    src="https://zao.taobao.com/vrimage/preview?userId=17381151964&amp;bizId=23148568&amp;type=cgs"
                    allowfullscreen="allowfullscreen"
                    data-rocket-lazyload="fitvidscompatible"
                    data-lazy-src="https://zao.taobao.com/vrimage/preview?userId=17381151964&amp;bizId=23148568&amp;type=cgs"
                    data-was-processed="true"
                /> */}
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
        textAlign: 'center'
    }
};
