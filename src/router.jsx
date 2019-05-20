/**
 * 定义应用路由
 */
import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import BlankLayout from './layouts/BlankLayout';
import Resource from './pages/HomePage/components/Resource';

const router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/projects" component={Resource} />
        <Route path="/" component={BlankLayout} />
      </Switch>
    </HashRouter>
  );
};

export default router();
