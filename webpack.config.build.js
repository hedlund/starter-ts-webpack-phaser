var webpack = require('webpack');
var merge = require('webpack-merge');
var config = require('./webpack.config');

if (process.env.NODE_ENV === 'development') {

    module.exports = merge(config, {
        devtool: 'source-map',
        plugins: [
            new webpack.NoErrorsPlugin()
        ]
    });
    
} else {

    module.exports = merge(config, {
        devtool: 'source-map',
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    });
    
}
