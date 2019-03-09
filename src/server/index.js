/* eslint-disable global-require */

const express = require('express');

const config = require('../../config');
const logger = require('./lib/logger');
const paths = require('../../config/paths');

/* ------------------------------------------ *
 * Initialize server
 * ------------------------------------------ */
// output the config for debugging
logger.info('config', { config });

const app = express();

/* ------------------------------------------ *
 * Webpack
 * ------------------------------------------ */
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../../config/webpack.config.dev');

  const compiler = webpack(webpackConfig);
  const logLevel = 'silent'; // ['trace', 'debug', 'info', 'warn', 'error', 'silent']

  app.use(
    webpackDevMiddleware(compiler, {
      logLevel,
      publicPath: webpackConfig.output.publicPath,
    }),
  );
  app.use(webpackHotMiddleware(compiler));
}

/* ------------------------------------------ *
 * Assets
 * ------------------------------------------ */
app.use(paths.servedPath, express.static(paths.appBuild));

/* ------------------------------------------ *
 * All GET requests render index.html
 *
 * This should be at the end of the express configuration to only render the html file if there
 * are no matches in the routing to this point. This let's React router take over from here.
 * ------------------------------------------ */
app.get('*', (req, res) => res.sendFile(`${paths.appBuild}/index.html`));

/* ------------------------------------------ *
 * Start Express
 * ------------------------------------------ */
app.listen(config.port, err => {
  if (err) {
    return logger.error(err);
  }

  if (process.env.NODE_ENV === 'development') {
    // don't log in development since that comes from webpack
    return null;
  }

  return logger.info(`Running on port ${config.port}!`);
});
