import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const MENUS = [
    {
        name: 'HOME',
        path: '#index'
    },
    {
        name: 'PRODUCTS',
        path: '#service?products'
    },
    {
        name: 'SERVICES',
        path: '#service?solutions'
    },
    {
        name: 'PROJECTS',
        path: '#project'
    },
    {
        name: 'ABOUT',
        path: '#about'
    },
    {
        name: 'CONTACT US',
        path: '#contact'
    },
];

export default class Header extends Component {
    static displayName = 'Header';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    isAvtive = route => {
        const hash = document.location.hash;
        return hash.indexOf(route.substring(1)) > -1;
    };

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.logo}>
                    <Link to="/" className={styles.logoLink}>
                        T.Y. Fountain
                    </Link>
                </div>
                <ul className={styles.nav}>
                    <li className={styles.navItem}>
                        {MENUS.map((item, idx) => {
                            const active = this.isAvtive(item.path);
                            return (
                                <a
                                    key={idx}
                                    className={
                                        active ? styles.activeNavItemLink : styles.navItemLink
                                    }
                                    href={item.path}
                                >
                                    <span className="menu-title">{item.name}</span>
                                </a>
                            );
                        })}
                    </li>
                </ul>
            </div>
        );
    }
}