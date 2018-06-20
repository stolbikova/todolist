const path = require('path');
const express = require('express');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('../scripts/webpack.dev');

const app = express();
const compiler = webpack(webpackConfig);
const DEFAULT_PORT = 3000;
const PORT = process.env.DEV_PORT || DEFAULT_PORT;

app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(hotMiddleware(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`Listen on http://localhost:${PORT}/`);
  }
});