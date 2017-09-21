const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './app/app.module.js',
    output: {
        path: path.resolve(__dirname + '/bin'),
        filename: 'app.bundle.js',
        publicPath: '/bin'
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
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
        // loaders: [
        //     {
        //         test: /\.js$/,
        //         exclude: /node_modules/,
        //         loaders: 'babel-loader',
        //     },
        //     { test: /\.html$/, loader: 'html' },
        //     { test: /\.css$/, loaders: 'style!css' }
        // ]
    },
    devtool: '#inline-source-map'
}

