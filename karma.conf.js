var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

webpackConfig.module.preLoaders = [{
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loader: 'isparta',
}];

webpackConfig.isparta = {
  embedSource: true,
  noAutoWrap: true,
  babel: {
    presets: ['es2015', 'react'],
  },
};

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    singleRun: true,
    frameworks: [ 'mocha' ],
    files: [
      'src/*.js',
      'src/**/*.js',
      'src/*.jsx',
      'src/**/*.jsx',
    ],
    preprocessors: {
      'src/*.js': [ 'webpack', 'sourcemap' ],
      'src/**/*.js': [ 'webpack', 'sourcemap' ],
      'src/*.jsx': [ 'webpack', 'sourcemap' ],
      'src/**/*.jsx': [ 'webpack', 'sourcemap' ],
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'build/coverage',
      type: 'html',
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true,
    },
  });
};
