const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const config = require('./index');
const paths = require('./paths');

module.exports = {
  devtool: 'eval-source-map',
  entry: ['webpack-hot-middleware/client?reload=true', paths.appIndexJs],
  mode: 'development',
  module: {
    rules: [
      {
        include: [path.resolve('src/client/')],
        loader: require.resolve('babel-loader'),
        options: {
          // Don't waste time on Gzipping the cache
          cacheCompression: false,
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
        },
        test: /\.js$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: paths.appBuild,
    publicPath: paths.servedPath,
  },
  plugins: [
    // Displays a progress bar on the console while the bundle is building.
    new ProgressBarPlugin({
      summary: false,
      summaryContent: `\nRunning on port ${config.port}!\n`,
    }),
    // Webpack's HRM
    new webpack.HotModuleReplacementPlugin(),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: paths.appHtml,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
  resolve: {
    alias: {
      src: paths.appSrc,
    },
    extensions: ['.js'],
  },
};
