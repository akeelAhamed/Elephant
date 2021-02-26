import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const RouteWithLayout = props => {
  const { layout: Layout, component: Component, login, noAuth, common, ...rest } = props;
  let to = "/";
  
  if((login || common) && !noAuth){
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
