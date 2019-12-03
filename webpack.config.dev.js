'use strict'
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: "/",
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    },
    port: 8899
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },       
      {
        test: /\.css$/,
        use: [
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
            'css-loader',
            'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      }      
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}