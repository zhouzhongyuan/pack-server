var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeModules = {};

var SERVER_DIR = path.resolve(__dirname, 'server');
var SERVER_BUILD_DIR = path.resolve(__dirname, 'dist/js');

// es5 style alternative
fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

const config = {
    // The configuration for the server-side rendering
    name: 'server',
    target: 'node',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: SERVER_BUILD_DIR,
        filename: 'index.js'
    },
    externals: nodeModules,
    module: {
        preLoaders:[{
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/,
            options: {
                fix: true,
            },
        }],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
        ]
    },
    eslint: {
        configFile: './.eslintrc'
    },
    watch: true,
};
module.exports = config;