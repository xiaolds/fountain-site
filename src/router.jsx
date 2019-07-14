/**
 * 定义应用路由
 */
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import BlankLayout from './layouts/BlankLayout';
import asyncComponent from "./components/AsyncComponent";
const Resource = asyncComponent(() => import("./pages/HomePage/components/Resource"));
const AboutDetail = asyncComponent(() => import("./pages/HomePage/components/AboutDetail"));

const router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/service" component={Resource} />
                <Route path="/contact" component={AboutDetail} />
                <Route path="/" component={BlankLayout} />
            </Switch>
        </HashRouter>
    );
};

export default router();
