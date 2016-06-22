import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import path from 'path';

export default {
  devtool: 'source-map',
  entry: {
    helloworld: './es6-jsx-examples/helloworld.js',
    timer: './es6-jsx-examples/timer.js',
    'connect-redux-to-react': './connect-redux-to-react/index.js',
    'react-form': './react-form/index.js',
    'simple-redux-form': './simple-redux-form/index.js',
    'example-page': './jsx-exercise/index.js',
    'giphy-search': './redux-giphy-search/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    stats: 'minimal',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // Really important to ensure react runs in production mode when you ran
        // `export NODE_ENV=production` before running webpack. Also note that
        // exposing your entire process.env is a major security risk.
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new CopyWebpackPlugin([
      { from: 'connect-redux-to-react/connect-redux-to-react.html' },
      { from: 'es6-jsx-examples/helloworld.html' },
      { from: 'es6-jsx-examples/timer.html' },
      { from: 'simple-redux-form/simple-redux-form.html' },
      { from: 'jsx-exercise/example-page.html' },
    ]),
  ],
};
