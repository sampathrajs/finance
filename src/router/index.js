import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from '../App';

import { Provider } from 'react-redux';
import { Admin } from './admin';
import { Login } from '../page/login';
import { Customer } from '../page/customer';
import { AddCustomer } from '../page/customer/add';
import PropTypes from 'prop-types';

export const AppRouter = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <App>
            <Switch>
              <Route
                exact
                path="/login"
                component={({ history }) => <Login history={history} />}
              />
              <Admin exact path="/" component={Customer} />
              <Admin exact path="/customer" component={Customer} />
              <Admin exact path="/addcustomer" component={AddCustomer} />
            </Switch>
          </App>
        </Fragment>
      </Router>
    </Provider>
  );
};
AppRouter.propTypes = {
  store: PropTypes.object,
};
