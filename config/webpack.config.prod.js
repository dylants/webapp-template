const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  bail: true,
  devtool: 'eval-source-map',
  entry: [paths.appIndexJs],
  mode: 'production',
  module: {
    rules: [
      {
        include: [path.resolve('src/client/')],
        loader: require.resolve('babel-loader'),
        test: /\.js$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    minimize: false,
    // Keep the runtime chunk seperated to enable long term caching
    runtimeChunk: true,
    // Split vendor and commons
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    // Generated JS file names (with nested folders).
    // There will be one main bundle, and one file per asynchronous chunk.
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    filename: 'static/js/[name].[chunkhash:8].js',
    // The build folder.
    path: paths.appBuild,
    // This needs an extra / at the end to support chunking
    publicPath: paths.servedPath,
  },
  plugins: [
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
  ],
  resolve: {
    alias: {
      src: paths.appSrc,
    },
    extensions: ['.js'],
  },
};
