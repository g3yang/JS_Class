 var path = require('path');
 var webpack = require('webpack');
     
 module.exports = {
     entry: './src/index.js',
     output: {
         path: __dirname + '/dist',
         publicPath: '/',
         filename: 'bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react']
                 }
             }
         ]
     },
        
     devServer: {
         contentBase: './dist',
         hot: true
     },

     stats: {
         colors: true
     },
     devtool: 'source-map'
 };