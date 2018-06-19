module.exports = {
    entry: './src/app.js',
    devServer:{
       contentBase: './dist'
    },
    devtool: 'inline-source-map',
    output: {
        filename:'bundle.js'
    }
}