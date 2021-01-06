import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from '@components/private-route';
import Field from '@pages/field/field';
import Login from '@pages/login';

import './style.scss';

const loginPath = '/login';

const App: FC = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <PrivateRoute exact path="/home" component={Field} loginPath={loginPath} />
    <Route path={loginPath} component={Login} />
    <Redirect to="/" />
  </Switch>
);

export default App;
