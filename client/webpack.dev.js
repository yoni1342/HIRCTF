const config = require('./webpack.config');
const {merge} = require('webpack-merge');

module.exports = merge(config, {
    mode: 'development',
    entry: './src/index.tsx',
    devServer: {
        port: 3000
    },
    // Need for docker container reloading
    watchOptions: {
        poll: true
    }
});