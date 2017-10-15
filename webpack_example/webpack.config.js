var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js',
        sourceMapFilename: "bundle.map",
        libraryTarget: 'var',
        library: 'ui'
    },
    module:{
        loaders:[
            { test: /\.js$/,
              loader:'babel-loader',
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}
