// app route inject to id="main"
import React from 'react';

// react router
// browser history - https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md
import { Router, browserHistory } from 'react-router';

// routes.js is like the site map
import routes from '../routes';

// export
// default
// class
// app routes
// extends react.component
export default class AppRoutes extends React.Component {
  // render() {}
  // return
  // <Router>
  // history=
  // {browser history}
  // routes=
  // {routes}
  // onupdate=
  // {}
  // () => window.scrollTo
  // (0, 0)
  render() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
    );
  }
}
