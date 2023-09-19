const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", "*"]
    }
}