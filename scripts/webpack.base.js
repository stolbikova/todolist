const {Config} = require('webpack-config');
const fs = require('fs');
const path = require('path');

const nodeModules = {};

/* eslint-disable no-sync */
fs.readdirSync('node_modules')
  .filter((x) => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });
/* eslint-enable no-sync */

module.exports = new Config().merge({
  entry: {
    todolist: [
      'babel-register',
      'babel-polyfill',
      path.resolve(__dirname, '../src/index.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  externals: nodeModules,
  resolve: {
    extensions: ['.js'],
    alias: {
      constants: path.resolve(__dirname, '../src/constants'),
      utils: path.resolve(__dirname, '../src/utils')
    }
  },
  target: 'node',
  module: {
    rules: [{
      test: /\.js/,
      use: [{
        loader: 'babel-loader',
        options: {compact: false}
      }],
    }, {
      test: /\.json/,
      use: ['json-loader']
    }, {
        test: /(\.sass|\.scss|\.css)$/,
        use: [{
          loader: 'style-loader',
          options: {
            modules: true,
            includePaths: [path.resolve(__dirname, '../src/styles')]
          }
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            includePaths: [path.resolve(__dirname, '../src/styles')],
            hashPrefix: `web${Date.now()}`,
            localIdentName: '[local]___[hash:base64:5]'
          }
        }, {
          loader: 'sass-loader',
          options: {
            modules: true,
            includePaths: [path.resolve(__dirname, '../src/styles')]
          }
        }]
      }, {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }]
  },
  node: {fs: 'empty'}
});
