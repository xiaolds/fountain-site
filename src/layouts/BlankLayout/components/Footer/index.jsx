import React from 'react';
import { Grid } from '@alifd/next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons/faLocationArrow';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons/faPhoneAlt';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';

import config from '../../../../common/config.js';

const { Row, Col } = Grid;

const dataSource = [
    {
        title: 'Location',
        pic: faLocationArrow,
        desc: 'Shanghai, China'
    },
    {
        title: 'mail',
        pic: faEnvelope,
        desc: 'tongyi@mail.com'
    },
    {
        title: 'phone',
        pic: faPhoneAlt,
        desc: '+86 1881234567'
    },
    {
        title: 'Time',
        pic: faClock,
        desc: 'Workday 9am ~ 5pm'
    }
];

const handleGoService = title => {
    sessionStorage && sessionStorage.setItem('ty-fountain-service', title);
};

const goNavPage = item => {
    item.location && handleGoService(item.location);
    const origin = window.location.origin;
    window.location.href = `${origin}/#/${item.link}`;
};

const Footer = () => {
    return (
        <div className="foot-wrapper">
            <div style={styles.content} className="w1200">
                <Row>
                    <Col l="8">
                        <h3 className="footer-title">T.Y. Fountain</h3>
                        <div style={styles.nav}>
                            <p style={styles.desc} className="ft14">
                                T.Y. Fountain is a professional designing and manufacturing company
                                which is engaged in large fountains & water features with over 15
                                years experience.
                            </p>
                            {dataSource.map(item => (
                                <p>
                                    <FontAwesomeIcon icon={item.pic} className="icon" />
                                    <span className="footer-desc">{item.desc}</span>
                                </p>
                            ))}
                        </div>
                    </Col>
                    <Col l="8" />
                    <Col l="8">
                        <h3 className="footer-title">Navigation</h3>
                        {config.navigation.map(item => (
                            <p className="footer-nav" onClick={() => goNavPage(item)}>
                                {/* <a  href={item.link}> */}
                                    <span>> &nbsp;</span>
                                    <span>{item.title}</span>
                                {/* </a> */}
                            </p>
                        ))}
                    </Col>
                </Row>
                <p style={styles.copyRight}>T.Y. Fountain</p>
            </div>
        </div>
    );
};

const styles = {
    content: {
        margin: '0 auto'
    },
    desc: {
        color: '#7f7f7f'
    },
    copyRight: {
        textAlign: 'center'
    }
};

export default Footer;
