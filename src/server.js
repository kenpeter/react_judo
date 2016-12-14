// path
import path from 'path';

// http server
import { Server } from 'http';

// express
import Express from 'express';

// react
import React from 'react';

// renderToString used in server
// render a react element to html
import { renderToString } from 'react-dom/server';

// match the url
// router context
import { match, RouterContext } from 'react-router';

// my route
import routes from './routes';

// 404 page
import NotFoundPage from './components/NotFoundPage';

// initialize the server and configure support for ejs templates
// express app
const app = new Express();

// server with express
const server = new Server(app);

// ./views/index.ejs
app.set('view engine', 'ejs');

// set ./views/*.ejs
app.set('views', path.join(__dirname, 'views'));

// ./static/css
// ./static/img
// .static/js
app.use(Express.static(path.join(__dirname, 'static')));

// app.get
// *
// (req, res) => {}
// match()
// param 1: {routes, location: req.url}
// param 2: callback
// (err, redirect_location, render_props) => {}
// 
app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // error
      if (err) {
        // return
        // res
        // .status(500)
        // .send(msg)
        return res.status(500).send(err.message);
      }

      // redirect
      if (redirectLocation) {
        // return
        // res
        // .redirect
        // 302
        // redirect
        // .pathname
        // +
        // redirect
        // .search
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // let markup, so let only exist in {} closest
      // markup for index.ejs
      let markup;
      
      // if render_props from callback param
      if (renderProps) {
        // markup
        // render to string
        // router context
        // ... render props
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // markup 404
        // render to string
        // <not found page>
        // res
        // .status
        // 404
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // that is how we pass var markup to index.ejs
      return res.render('index', { markup });
    }
  );
});


const port = process.env.PORT || 8003;
const env = process.env.NODE_ENV || 'production';

// server listen
// (port, err) => {}
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
