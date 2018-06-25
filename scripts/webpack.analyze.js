const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const {Config} = require('webpack-config');
const path = require('path');

module.exports = new Config()
  .extend(path.resolve(__dirname, 'webpack.prod.js'))
  .merge({
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  });