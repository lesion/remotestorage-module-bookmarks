var webpack = require('webpack');
var isProd = (process.env.NODE_ENV === 'production');

// minimize only in production
var plugins = isProd ? [new webpack.optimize.UglifyJsPlugin({minimize: true })] : []

module.exports = {
  entry: './index.js',
  // source map not in production
  devtool: !isProd && 'source-map',
  output: {
    filename: __dirname + '/dist/build.js',
    libraryTarget: 'umd'
  },
  externals: [ 'xmlhttprequest', 'remotestoragejs' ],
  resolve: {
    extensions: ['', '.js']
  },
  plugins: plugins
};
