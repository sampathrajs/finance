import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import { UserView } from '../Layout';
const UserLayout = withRouter(UserView);

export const User = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <UserLayout history={matchProps.history}>
          <Component {...matchProps} />
        </UserLayout>
      )}
    />
  );
};
User.propTypes = {
  component: PropTypes.func,
};
