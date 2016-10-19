var webpack = require('webpack');

module.exports = {
    entry: './src/main/javascript/entry.js',
    output: {
        path:  __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {presets: ['es2015', 'stage-0', 'react']}
            }
        ]
    }

};