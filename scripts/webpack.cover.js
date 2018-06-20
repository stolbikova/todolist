const {Config} = require('webpack-config');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

module.exports = new Config()
  .extend(path.resolve(__dirname, 'webpack.base.js'))
  .merge({
    devtool: 'inline-cheap-module-source-map',
    mode: 'production',
    entry: {app: [
      'babel-polyfill',
      './src/index.js'
    ]},
    externals: [nodeExternals()],
    target: 'node',
    plugins: [
      new webpack.DefinePlugin({
        'process.env':
          {NODE_ENV: JSON.stringify('production')}
      }),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin()
    ],
    module: {
      rules: [{
        test: /(\.js|\.jsx)$/,
        loader: 'babel-loader',
        query: {
          compact: false,
          plugins: ['babel-plugin-istanbul']
        }
      }, {
        test: /(\.js|\.jsx)$/,
        include: path.resolve(__dirname, '../src'),
        loader: 'istanbul-instrumenter-loader',
        query: {esModules: true}
      }]
    }
  });
