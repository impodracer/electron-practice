const merge = require('webpack-merge');
const exp = require('./webpack.config.base');

module.exports = merge(
  {
    mode: 'development',
    entry: ['webpack-dev-server/client?http://localhost:3000'],
    devServer: {
      host: 'localhost',
      port: 3000,
      historyApiFallback: true,
    },
    stats: {
      assets: false,
      entrypoints: false,
      modules: false,
      children: false,
    }
  },
  exp[1]
);
