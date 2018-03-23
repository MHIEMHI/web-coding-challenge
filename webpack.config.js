var path = require('path');

var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'public/bundle.js',
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            }
        ]
    }
}