import React, { Component } from 'react';
import config from '../../../../common/config';

const dataSource = [
    {
        img: 'thumb-1'
    },
    {
        img: 'thumb-2'
    },
    {
        img: 'thumb-3'
    },
    {
        img: 'thumb-4'
    },
    {
        img: 'thumb-5'
    },
    {
        img: 'thumb-6'
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

    handleGoService = title => {
        sessionStorage && sessionStorage.setItem('ty-fountain-project', title);
    };

    goServiceDetail = title => {
        this.handleGoService(title || config.projectsData[0].title);
        
        const { setProps } = this.props;
        if (setProps) {
            setProps(title);
        } else {
            const origin = window.location.origin;
            window.location.href = `${origin}/#/project`;
        }
    };

    render() {
        const dataSource = config.projectsData;
        return (
            <div className="pt100">
                <p className="page-title" onClick={this.goServiceDetail}>
                    Recent Projects
                </p>
                <div style={styles.container}>
                    <div style={styles.silder} className="w1200 main-wrapper">
                        {dataSource.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    style={styles.item}
                                    className={`${item.thumb}`}
                                    onClick={() => this.goServiceDetail(item.title)}
                                />
                            );
                        })}
                    </div>
                </div>
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
        width: '260px',
        height: '220px',
        margin: '10px',
        display: 'inline-block'
    },
    silder: {
        overflowX: 'auto',
        whiteSpace: 'nowrap'
    }
};
