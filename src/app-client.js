// import
// react
// from 'react'
import React from 'react';

// import
// react dom
// from
// react-dom
import ReactDOM from 'react-dom';

// import
// app routes
// from
// ./
// components
// app routes
import AppRoutes from './components/AppRoutes';

// when window load
// = 
// () => {}, arrow func, assign to method
// window.onload = function() {} === arrow func
// https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/
// react dom render
// <app routes>
// document
// get element by id
// main
window.onload = () => {
  ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};
