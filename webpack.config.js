const path = require('path');
const MomentLocalesPlugin = require(`moment-locales-webpack-plugin`);
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
              loader: 'css-loader',
              options: {
                  url: false
              }
          }
      ]
      }
    ],
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@store': path.resolve(__dirname, 'src/store/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@hocs': path.resolve(__dirname, 'src/hocs/')
    },
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  plugins: [
    new MomentLocalesPlugin(),
    new webpack.ProvidePlugin ({
      PropTypes: 'prop-types',
      React: 'react'
    })
  ]
};
