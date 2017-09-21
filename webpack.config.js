const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './app/app.module.js',
    output: {
        path: path.resolve(__dirname + '/bin'),
        filename: 'app.bundle.js',
        // publicPath: '/bin'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: 'babel-loader',
            },

            { 
                test: /\.html$/, loader: 'html'
            },

            {
                test: /\.scss$/,
                // loaders: ['style-loader', 'css-loader', 'sass-loader']
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader!sass-loader',
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.bundle.css'),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ],

    devtool: '#inline-source-map'
}

