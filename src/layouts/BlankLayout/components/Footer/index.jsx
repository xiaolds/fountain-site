import React from 'react';
import { Grid } from '@alifd/next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '../../../../common/config.js';

const { Row, Col } = Grid;

const handleGoService = (title, pageType) => {
    sessionStorage && sessionStorage.setItem(pageType, title);
};

const getPageType = title => {
    switch (title) {
        case 'Products':
            return 'ty-fountain-product';
        case 'Services':
            return 'ty-fountain-service';
        case 'Projects':
            return 'ty-fountain-project';
    }
};

const goNavPage = item => {
    const pageType = getPageType(item.title);
    item.location && handleGoService(item.location, pageType);
    const origin = window.location.origin;
    window.location.href = `${origin}/#/${item.link}`;
};

const Footer = () => {
    return (
        <div className="foot-wrapper">
            <div style={styles.content} className="w1200">
                <Row>
                    <Col l="10">
                        <h3 className="footer-title">T.Y. Fountain</h3>
                        <div style={styles.nav}>
                            <p style={styles.desc} className="ft14">
                                T.Y. Fountain is a professional designing and manufacturing company
                                which is engaged in large fountains & water features with over 15
                                years experience.
                            </p>
                            {config.ContactData.map(item => (
                                <p>
                                    <FontAwesomeIcon icon={item.pic} className="icon" />
                                    {item.desc && <span className="footer-desc">{item.desc}</span>}
                                    {item.render && <p className="footer-desc">{item.render()}</p>}
                                </p>
                            ))}
                        </div>
                    </Col>
                    <Col l="6" />
                    <Col l="8">
                        <h3 className="footer-title">Navigation</h3>
                        {config.navigation.map(item => (
                            <p className="footer-nav" onClick={() => goNavPage(item)}>
                                <span>> &nbsp;</span>
                                <span>{item.title}</span>
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
