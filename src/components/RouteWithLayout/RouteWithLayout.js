import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Helper from '../../_services/Helper';

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, login, noAuth, common, ...rest } = props;
  let to = "/";
  const state = useSelector(state => state._pref);

  if(login && !state.isLoaded){
    return(Helper.getLoader());
  }
  
  if((login || common) && !noAuth){
    // logged in route
    return (
      <Route
        {...rest}
        render={matchProps => (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )}
      />
    );
  }else if(noAuth && !login){
    return (
      <Route
        {...rest}
        render={matchProps => (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )}
      />
    );
  }else if(login){
    to = "/dashboard";
  }else if(to === ""){
    // logout and redirect
  }

  return(
    <Redirect
        exact
        from={props.path}
        to={to}
      />
  )
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
