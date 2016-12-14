// react
import React from 'react'

// Route is <Route>
// it is like express
import { Route, IndexRoute } from 'react-router'

// layout, entire html page
import Layout from './components/Layout';

// index page, list of athlete preview
import IndexPage from './components/IndexPage';

// individual athlete page
import AthletePage from './components/AthletePage';

// not found
import NotFoundPage from './components/NotFoundPage';

// const
// routes
// {}
// <Route>
// component
// =
// {Layout}
// layout == header, app-content, footer
// app-content has this.props.children
// so AtheletePage and not found page can render
// <Route>
// path=
// athlete/:id
// component=
// {AthletePage}
// <Route>
// path="*"
// {not found page}
const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="athlete/:id" component={AthletePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

// export
// default
// routes
export default routes;
