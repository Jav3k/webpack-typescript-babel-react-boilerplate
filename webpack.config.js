const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const APP_PATH = path.resolve(__dirname, 'src');
const MODE = process.env.NODE_ENV === 'development' ? 'development' : 'production';

config = {
  mode: MODE,
  entry: path.join(APP_PATH, 'index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    progress: true,
    open: true,
    // hot: true
  },
  module: {
    rules: [{
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
    }],
  },

  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: path.join(APP_PATH, 'index.html') }),
    new ForkTsCheckerWebpackPlugin(),
  ]
};

module.exports = config
