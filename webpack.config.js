const path = require('path');
const webpack = require('webpack');

const PATHS = {
    source: path.join(__dirname, 'public'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: {
        'index': PATHS.source + '/main.js'
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    }
};