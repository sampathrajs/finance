import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { useSelector } from 'react-redux';

import Login from '../page/login';
import { AdminView } from '../layout/admin';

const AppLayout = withRouter(AdminView);

export const Admin = ({ component: Component, ...rest }) => {
  // const isAuthenticated = useSelector(state => state.admin.isAuthenticated);
  return (
    <Route
      {...rest}
      render={
        (matchProps) => (
          // isAuthenticated ? (
          <AppLayout history={matchProps.history}>
            <Component {...matchProps} />
          </AppLayout>
        )
        // ) : (
        //     <Login history={matchProps.history} />
        // )
      }
    />
  );
};
Admin.propTypes = {
  component: PropTypes.func,
};
