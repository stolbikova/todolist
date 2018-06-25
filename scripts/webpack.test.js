const {Config} = require('webpack-config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

module.exports = new Config()
  .extend(path.resolve(__dirname, 'webpack.base.js'))
  .merge({
    devtool: 'source',
    mode: 'production',
    entry: {app: [
      'babel-polyfill',
      './src/index.js'
    ]},
    externals: [nodeExternals()],
    target: 'node',
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          uglifyOptions: {
            compress: false,
            ecma: 6,
            mangle: true
          },
          sourceMap: true
        })
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {NODE_ENV: JSON.stringify('production')}
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin()
    ]
  });