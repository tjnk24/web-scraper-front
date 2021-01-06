import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { PrivateRouteProps } from './types';

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component, loginPath, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser = localStorage.getItem('currentUser');
      if (!currentUser) {
        return <Redirect to={{ pathname: loginPath, state: { from: props.location } }} />;
      }

      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
