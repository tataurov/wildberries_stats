import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import ROUTES from '../constants/routes';
import * as applicationActions from '../actions/applicationActionCreators';
import Orders from '../Pages/Orders';
import Home from '../Pages/Home';
import NotFound from "../Pages/NotFound";


const WrappedRoute = ({path, component, ...rest}) => {
    if (rest.computedMatch.path !== rest.applicationState.currentRoute) {
      rest.actions.setCurrentRoute(rest.computedMatch.path);
    }

    if (rest.applicationState.redirect) {
      rest.actions.resetRedirect();
      return <Redirect to={rest.applicationState.redirect.path} />;
    }

    return <Route {...{path, component, exact: rest.exact}} />;
  },

  Routes = (props: any) => {
    return (
      <Switch>
        <WrappedRoute
          path={ROUTES.HOME}
          component={Home}
          exact
          {...props}
        />
        <WrappedRoute
          path={ROUTES.ORDERS}
          component={Orders}
          exact
          {...props}
        />
        <Route
          path='*'
          component={NotFound}
        />
      </Switch>
    );
  },

  mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(applicationActions, dispatch),
    };
  },

  mapStateToProps = ({customerState, applicationState}) => {
    return {
      customerState, applicationState
    };
  },

  withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  );

export default compose(withConnect)(Routes);
