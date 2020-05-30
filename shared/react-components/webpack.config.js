const path = require('path');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const webpackConfig = (env) => ({
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      PnpWebpackPlugin,
    ],
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /dist/,
      },
    ],
  },
  // plugins: [
  //   new ForkTsCheckerWebpackPlugin({ eslint: true }),
  // ],
});

module.exports = webpackConfig;
