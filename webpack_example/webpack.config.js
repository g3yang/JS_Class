module.exports = {
    entry: './index.js',
    output: {
        path:  __dirname,
        filename: 'bundle.js',
        sourceMapFilename: "bundle.map",
        publicPath: '/bundles/',
        libraryTarget: 'var',
        library: 'ui'
    }
}