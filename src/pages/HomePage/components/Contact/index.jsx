import React, { Component } from 'react';

import Header from '../../../../layouts/BlankLayout/components/Header';
import Footer from '../../../../layouts/BlankLayout/components/Footer';
import Feature from '../Feature';
import SendEmail from '../SendEmail';

export default class Contact extends Component {
    static displayName = 'Contact';

    componentDidMount() {
        this.ref.scrollIntoView();
    }

    render() {
        return (
            <div className="minw-1200">
                <Header />
                <div className="project-head light-bg" ref={el => (this.ref = el)}>
                    <span className="project-title">CONTACT US</span>
                </div>
                <SendEmail />
                <Feature />
                <div className="map-wrapper">
                    <a
                        // class="fusion-no-lightbox"
                        href="https://goo.gl/maps/mCGrmET79N12"
                        target="_blank"
                        aria-label="contact-map"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://www.tyfountain.com//wp-content/uploads/2018/09/contact-map.png"
                            data-lazy-src="https://www.tyfountain.com//wp-content/uploads/2018/09/contact-map.png"
                            width="1920"
                            height="513"
                            alt=""
                            data-lazy-srcset="https://www.tyfountain.com//wp-content/uploads/2018/09/contact-map-200x53.png 200w, https://www.tyfountain.com//wp-content/uploads/2018/09/contact-map-400x107.png 400w, https://www.tyfountain.com//wp-content/uploads/2018/09/contact-map-600x160.png 600w, https://www.tyfountain.com//wp-content/uploads/2018/09/contact-map-800x214.png 800w, https://www.tyfountain.com//wp-content/uploads/2018/09/contact-map-1200x321.png 1200w, https://www.tyfountain.com//wp-content/uploads/2018/09/contact-map.png 1920w"
                            data-lazy-sizes="(max-width: 800px) 100vw, 1920px"
                            sizes="(max-width: 800px) 100vw, 1920px"
                            data-was-processed="true"
                        />
                    </a>
                </div>
                <Footer />
            </div>
        );
    }
}
