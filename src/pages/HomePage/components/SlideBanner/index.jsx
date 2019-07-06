import React, { Component } from 'react';
import './index.scss';

export default class SlideBanner extends Component {
    static displayName = 'SlideBanner';

    static propTypes = {};

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
    }

    isSelected = selected => (selected ? ' selected' : '');

    onMouseEnter = event => {
        const { index } = event.currentTarget.dataset;
        const selectedIndex = parseInt(index, 10);
        if (!isNaN(selectedIndex)) {
            this.setState({
                selectedIndex
            });
        }
    };

    render() {
        const { selectedIndex } = this.state;
        return (
            <div className="pt100">
                <p className="page-title">What We Can Do</p>
                <div className="hy-friends-list">
                    <a
                        href="#"
                        className={`hy-friends-item ${selectedIndex === 0 ? 'selected' : ''}`}
                        data-index="0"
                        onMouseEnter={this.onMouseEnter}
                    >
                        <div className="hy-friends-img pro1" />
                        <h4>Product 1</h4>
                        <span>Water Screen</span>
                        <p>We can do Water Screen~~~~!!!!</p>
                        <p>We can do Water Screen~~~~!!!!</p>
                        <p>We can do Water Screen~~~~!!!!</p>
                    </a>

                    <a
                        href="#"
                        className={`hy-friends-item ${selectedIndex === 1 ? 'selected' : ''}`}
                        data-index="1"
                        onMouseEnter={this.onMouseEnter}
                    >
                        <div className="hy-friends-img pro2" />
                        <h4>Product 2</h4>
                        <span>Water Fountain</span>
                        <p>We can do Water Fountain~~~~!!!!</p>
                        <p>We can do Water Fountain~~~~!!!!</p>
                        <p>We can do Water Fountain~~~~!!!!</p>
                    </a>

                    <a
                        href="#"
                        className={`hy-friends-item ${selectedIndex === 2 ? 'selected' : ''}`}
                        data-index="2"
                        onMouseEnter={this.onMouseEnter}
                    >
                        <div className="hy-friends-img pro3" />
                        <h4>Product 3</h4>
                        <span>Water Fountai</span>
                        <p>We can do Water Fountain~~~~!!!!</p>
                        <p>We can do Water Fountain~~~~!!!!</p>
                        <p>We can do Water Fountain~~~~!!!!</p>
                    </a>
                </div>
            </div>
        );
    }
}
