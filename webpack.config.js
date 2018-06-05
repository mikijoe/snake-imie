const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('hmlt-webpack-plugin');

module.exports = {
    entry: [path.resolve('./src/index.js')],
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve('./dist'),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [path.resolve('./node_modules')],
                use: 'badel-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./src/index.html'),
            filename:'index.html'
        })
    ],
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    }
}