import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ComanyFeed as ComanyFeedView,
  PersonelFeed as PersonelFeedView,
  ElephantWall as ElephantWallView,
  
  Search as SearchView,
  SearchResult as SearchResultView,
  PurchaseSell as PurchaseSellView,
  NotFound as NotFoundView
} from './views';

import { 
  SignIn,
  SignUp
} from "./views/Web";

const Routes = (props) => {
  const basename = '/';//props.basename;
  
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to={basename+"sign-in"}
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path={basename+"dashboard"}
        {...props}
      />
      <RouteWithLayout
        component={ComanyFeedView}
        exact
        layout={MainLayout}
        path={basename+"company-feed"}
        {...props}
      />
      <RouteWithLayout
        component={PersonelFeedView}
        exact
        layout={MainLayout}
        path={basename+"personal-feed"}
        {...props}
      />
      <RouteWithLayout
        component={ElephantWallView}
        exact
        layout={MainLayout}
        path={basename+"elephant-wall"}
        {...props}
      />

      <RouteWithLayout
        component={SearchView}
        exact
        layout={MinimalLayout}
        path={basename+"search"}
        {...props}
      />
      <RouteWithLayout
        component={SearchResultView}
        exact
        layout={MinimalLayout}
        path={basename+"search/:result"}
        {...props}
      />
      <RouteWithLayout
        component={PurchaseSellView}
        exact
        layout={MinimalLayout}
        path={basename+"search/:result/:action"}
        {...props}
      />

      {/* Web routes */}
      <RouteWithLayout
        component={SignIn}
        exact
        noAuth
        layout={MinimalLayout}
        path={basename+"sign-in"}
        {...props}
      />

      <RouteWithLayout
        component={SignUp}
        exact
        noAuth
        layout={MinimalLayout}
        path={basename+"sign-up"}
        {...props}
      />

      {/* <Redirect to="/not-found" /> */}
      
      <RouteWithLayout
        component={NotFoundView}
        exact
        common
        layout={MinimalLayout}
        path={basename+"not-found"}
      />
      <RouteWithLayout layout={MinimalLayout} component={NotFoundView} />
    </Switch>
  );
};

export default Routes;
