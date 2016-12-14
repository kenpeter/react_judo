// web pack
const webpack = require('webpack');

// path
const path = require('path');

// module
// exports
// entry, path.join
// __dirname under under
// join 3 of them
// __dirname, src, app-client.js, ./src/app-client.js
// output to where
// output path: path.join
// path.join, ./src/static/js
// module
// loaders
// test, ./src, if see ./src, using loader babel-loader
// babel-loader?cacheDirectory=babel_cache&presets=['react', 'es2015']
// plugins
// new webpack define plugin
// process env node_env, NODE_ENV becomes global var
// json stringify
// process env node_env
// DedupePlugin, deduplicate files
// OccurenceOrderPlugin, reduce size of bundle.js
// mangle, variable name destroy
// dead_code, remove unreachable code
module.exports = {
  // entry
  // path.join
  // __dirname
  // ./src/app-client.js, because web pack told it so.
  // ./src/static/js/bundle.js
  
  // entry
  entry: path.join(__dirname, 'src', 'app-client.js'),
  
  // output
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js'
  },
  
  // module
  // loaders
  module: {
    loaders: [{
      //test
      test: path.join(__dirname, 'src'),
      
      // loader
      // babel loader
      loader: ['babel-loader'],
      
      // query
      query: {
        // cache dir
        cacheDirectory: 'babel_cache',
        
        // react and es 2015
        presets: ['react', 'es2015']
      }
    }]
  },
  
  // plugins
  plugins: [
    // new
    // webpack
    // define plugin
    // process env node env
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    // new
    // webpack
    // optim
    // de duplicate plugin
    new webpack.optimize.DedupePlugin(),
    
    // new webpack
    // optim
    // occurence order plugin
    new webpack.optimize.OccurenceOrderPlugin(),
    
    // new
    // webpack
    // optimze
    // uglify js plugin
    new webpack.optimize.UglifyJsPlugin({
      // compress
      compress: { warnings: false },
      
      //magle mix var
      mangle: true,
      
      // no source map
      sourcemap: false,
      
      // no beautify
      beautify: false,
      
      // dead code true
      dead_code: true
    })
  ]
};
