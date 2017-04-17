/* eslint-env node */

const path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 3000,
        colors: true,
        contentBase: 'public',
        historyApiFallback: true,
    },
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'babel-polyfill',
        './lib',
    ],
    output: {
        path: path.resolve(__dirname, 'public/bundle'),
        publicPath: '/bundle/',
        filename: 'frontend-job.js',
    },
    resolve: {
        modules: ['node_modules', 'shared'],
    },
    module: {
        loaders: [{
            test: new RegExp('.js$'),
            loader: 'babel!eslint',
            include: [
                path.resolve(__dirname, 'lib'),
            ],
        }, {
            test: new RegExp('.less$'),
            loader: 'style!css!less',
            include: [
                path.resolve(__dirname, 'lib'),
            ],
        },
    ] },
};
