var webpack = require('webpack');
module.exports = {
    context: __dirname + '/app',
    entry:  './app.module.js',
    output: {
        path: __dirname + '/assets/js',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* fileName= */"vendor.bundle.js")
    ],
    loaders: [
        {
            test: /.jsx?$/,
            loader: 'babel-loader'
        }
    ]
};