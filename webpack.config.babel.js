import path from 'path';

export default {
  devtool: 'source-map',
  entry: {
    helloworld: './es6-jsx-examples/helloworld.js',
    timer: './es6-jsx-examples/timer.js',
    'connect-redux-to-react': './connect-redux-to-react/index.js',
    'simple-redux-form': './simple-redux-form/index.js',
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
};
