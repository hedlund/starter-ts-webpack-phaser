var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var atImport = require('postcss-import');

var PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'public'),
    phaser: path.join(__dirname, 'node_modules', 'phaser', 'build', 'custom'),
    phaserDebug: path.join(__dirname, 'node_modules', 'phaser-debug', 'dist'),
    p2: path.join(__dirname, 'node_modules', 'p2')
};

process.env.BUILD_DIR = PATHS.build;

module.exports = {

    context: PATHS.src,
    entry: {
        app: [
            'babel-polyfill',
            'pixi', 'p2', 'phaser',
            './Game.ts'
        ]
    },
    resolve: {
        extensions: ['', '.ts', '.js'],
        alias: {
            phaser: path.join(PATHS.phaser, 'phaser-split.js'),
            pixi: path.join(PATHS.phaser, 'pixi.js'),
            p2: path.join(PATHS.p2, 'src', 'p2.js'),
            'phaser-debug': path.join(PATHS.phaserDebug, 'phaser-debug.js')
        }
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    module: {
        noParse: [
            /phaser-debug\.js$/
        ],
        preLoaders: [
            {
                test: /\.ts$/,
                loaders: ['tslint'],
                include: PATHS.src
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel?cacheDirectory'],
                include: PATHS.src
            },
            {
                test: /\.ts$/,
                loaders: ['ts-loader'],
                include: PATHS.src
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss'],
                include: PATHS.src
            },
            {
                test: /\.frag$/,
                loaders: ['phaser-glsl-loader'],
                include: PATHS.src
            },
            {
                test: /\.json$/,
                loaders: ['json'],
                include: [PATHS.src, PATHS.p2]
            },
            {
                test: /pixi\.js$/,
                loader: 'expose?PIXI'
            },
            {
                test: /phaser-split\.js$/,
                loader: 'expose?Phaser'
            },
            {
                test: /p2\.js$/,
                loader: 'expose?p2'
            }
        ]
    },
    node: {
        fs: 'empty'
    },

    postcss: function(webpack) {
        return [ atImport({ addDependencyTo: webpack }), precss, autoprefixer ];
    }
};
