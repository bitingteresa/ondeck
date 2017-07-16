import React from 'react';
import { Router, hashHistory } from 'react-router';

import Wrapper from './components/Wrapper';
import Home from './containers/Home';

const componentRoutes = {
  component: Wrapper,
  path: '/',
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: '*',
      getComponent(location, cb) {
        System.import('./components/NoMatch')
          .then(module => cb(null, module.default));
      }
    }
  ]
};

const Routes = () => {
  return (
    <Router history={hashHistory} routes={componentRoutes} />
  );
};

export default Routes;
