var webpack = require('webpack');
var merge = require('webpack-merge');
var config = require('./webpack.config');

process.env.BABEL_ENV = 'server';

module.exports = merge(config, {

    devtool: 'eval-source-map',

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ],

    devServer: {
        contentBase: process.env.BUILD_DIR,

        historyApiFallback: true,
        progress: true,

        stats: 'errors-only',

        host: process.env.HOST,
        port: process.env.PORT
    }
});
