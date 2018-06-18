const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'production',
  devtool: './src',
  plugins: [new webpack.optimize.AggressiveMergingPlugin()],
  module: {
    rules: [{
      test: /\.js$/,
      include: /src/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ['env']
        }
      }
    }]
  },
};
