/**
 * 定义应用路由
 */
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import BlankLayout from './layouts/BlankLayout';
import asyncComponent from "./components/AsyncComponent";
const Resource = asyncComponent(() => import("./pages/HomePage/components/Resource"));
const AboutDetail = asyncComponent(() => import("./pages/HomePage/components/AboutDetail"));
const Contact = asyncComponent(() => import("./pages/HomePage/components/Contact"));
const ProjectDetail = asyncComponent(() => import("./pages/HomePage/components/Project/Detail"));

const router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/service" component={Resource} />
                <Route path="/project" component={ProjectDetail} />
                <Route path="/about" component={AboutDetail} />
                <Route path="/contact" component={Contact} />
                <Route path="/" component={BlankLayout} />
            </Switch>
        </HashRouter>
    );
};

export default router();
