import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from '@components/private-route';
import Field from '@pages/field/field';
import Login from '@pages/login';

import './style.scss';

const App: FC = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/fieldPage" />
    </Route>
    <PrivateRoute exact path="/fieldPage" component={Field} />
    <Route path="/login" component={Login} />
    <Redirect to="/" />
  </Switch>
);

export default App;
