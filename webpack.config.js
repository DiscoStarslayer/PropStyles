var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /\-test\.(js|jsx)$/,
        loader: 'babel-loader'
      },
    ],
  },
  devtool: 'inline-source-map',
};
