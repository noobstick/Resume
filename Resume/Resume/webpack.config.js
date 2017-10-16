const path = require('path');
const webpack = require('webpack');
//var nodeModulesDir = path.resolve(__dirname, './node_modules');
module.exports = {

    context: path.resolve(__dirname + '/app'),
    entry:  {
        app: './app.module.js',
        vendor: ['angular']
    },
    output: {
        path: __dirname + '/assets/js',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        })
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {presets: ['es2015', 'stage-0']}
                    },
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.css$/, use: 'css-loader'
            }
        ]
    }
};