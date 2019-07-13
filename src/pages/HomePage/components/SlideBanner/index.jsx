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
                        href="#service?pros"
                        className={`hy-friends-item ${selectedIndex === 0 ? 'selected' : ''}`}
                        data-index="0"
                        onMouseEnter={this.onMouseEnter}
                    >
                        <div className="hy-friends-img pro1" />
                        <h4>Water Screen</h4>
                        <p>3D Water Screen Show is a feast combined with science and creativity.</p>
                    </a>

                    <a
                        href="#service?pros"
                        className={`hy-friends-item ${selectedIndex === 1 ? 'selected' : ''}`}
                        data-index="1"
                        onMouseEnter={this.onMouseEnter}
                    >
                        <div className="hy-friends-img pro2" />
                        <h4>Water Curtain</h4>
                        <p>
                            it brings infinite fun and vitality to interior environment, and fashion
                            to plazas and parks.
                        </p>
                    </a>

                    <a
                        href="#service?pros"
                        className={`hy-friends-item ${selectedIndex === 2 ? 'selected' : ''}`}
                        data-index="2"
                        onMouseEnter={this.onMouseEnter}
                    >
                        <div className="hy-friends-img pro3" />
                        <h4>Water Fountain</h4>
                        <p>
                            We are transforming static water into dynamic, pouring soul into it, and
                            companioning it with multiple lighting effects.
                        </p>
                    </a>
                    <a
                        href="#service?pros"
                        className={`hy-friends-item ${selectedIndex === 3 ? 'selected' : ''}`}
                        data-index="3"
                        onMouseEnter={this.onMouseEnter}
                    >
                        <div className="hy-friends-img pro3" />
                        <h4>Music Fountain</h4>
                        <p>
                            A way to deeply involve with the spectator through the most fundamental
                            and fascinating substance on earth.
                        </p>
                    </a>
                </div>
            </div>
        );
    }
}
