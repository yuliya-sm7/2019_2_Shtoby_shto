module.exports = {
    entry: './public/main.js',
    output: {
        path: __dirname +'/public/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.pug$/, loader: 'pug-loader'}
        ]
    },
};