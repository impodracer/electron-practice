const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  node: {
    __dirname: false,
    __filename: false,
  },
};

module.exports = [
  Object.assign(
    {
      target: 'electron-main',
      entry: ['./src/main/index.ts'],
      output: {
        path: path.join(__dirname, '../dist'),
        filename: 'electron-main.js',
      },
    },
    commonConfig
  ),
  Object.assign(
    {
      target: 'electron-renderer',
      entry: ['./src/renderer/index.tsx'],
      output: {
        path: path.join(__dirname, '../dist'),
        filename: 'electron-renderer.js',
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, '../src/renderer/index.html'),
        }),
      ],
    },
    commonConfig
  ),
];
