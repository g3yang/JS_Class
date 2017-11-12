import webpack from 'webpack';
import WebpackConfig from 'webpack-config';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = new WebpackConfig().merge({
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  context:  path.join(__dirname,'/app'),
  module: {
    preLoaders: [
/**      
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      }
*/
    ],
    loaders: [{
        test: /\.scss$/,
        loader: 'style!css?sourceMap!sass?sourceMap&sourceComments'
    }, {
        test: /\.(eot|woff|woff2|ttf|png|svg|jpg)$/,
        loader: 'url-loader?limit=300'
    }, {
        test: /\.json$/,
        loader: 'json-loader'
    }, {
        test: /\.html$/,
        loader: 'ng-cache?prefix=[dir]/[dir]'
    }, {
        test: /\.js$/,
        loader: 'babel?presets[]=es2015&plugins[]=angularjs-annotate',
        exclude: /node_modules/
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      title: 'Starter Theme',
      template: 'index.ejs',
      inject: 'body'
    })
  ]
})
