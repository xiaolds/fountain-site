import React, { Component, lazy, Suspense } from 'react';
import Banner from './components/Banner';

const SlideBanner = lazy(() => import('./components/SlideBanner'));
const FeatureDisplay = lazy(() => import('./components/FeatureDisplay'));
const Introduction = lazy(() => import('./components/Introduction'));
const OurTurn = lazy(() => import('./components/Introduction/OurTurn'));
const Project = lazy(() => import('./components/Project'));
export default class HomePage extends Component {
    static displayName = 'HomePage';

    constructor(props) {
        super(props);
        this.ref = {};
    }

    componentDidMount() {
        const hash = document.location.hash.substring(2);
        this.ref[hash] && this.ref[hash].scrollIntoView();
    }

    render() {
        return (
            <div>
                <div
                    id="index"
                    className="full-height display-flex w1200 main-wrapper"
                    ref={el => (this.ref.index = el)}
                >
                    <Banner />
                </div>
                <div className="w1200 main-wrapper">
                    <Suspense fallback={<h1>Still Loading…</h1>}>
                        <OurTurn />
                    </Suspense>
                </div>
                <div id="products" ref={el => (this.ref.products = el)}>
                    <Suspense fallback={<h1>Still Loading…</h1>}>
                        <SlideBanner />
                    </Suspense>
                </div>
                <div id="services" ref={el => (this.ref.services = el)}>
                    <Suspense fallback={<h1>Still Loading…</h1>}>
                        <FeatureDisplay />
                    </Suspense>
                </div>
                <div id="projects" ref={el => (this.ref.projects = el)}>
                    <Suspense fallback={<h1>Still Loading…</h1>}>
                        <Project />
                    </Suspense>
                </div>
                <div id="about" ref={el => (this.ref.about = el)}>
                    <Suspense fallback={<h1>Still Loading…</h1>}>
                        <Introduction />
                    </Suspense>
                </div>
            </div>
        );
    }
}
