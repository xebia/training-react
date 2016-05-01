import path from 'path';

export default {
  devtool: 'source-map',
  entry: {
    helloworld: './es6-jsx-examples/helloworld.js',
    timer: './es6-jsx-examples/timer.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
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
