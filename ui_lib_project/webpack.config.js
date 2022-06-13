const path = require('path');

// installing these packages (as development depedencies --save-dev):
/*
    babel-loader 
    css-loader 
    style-loader 
*/

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist', 'assets'),
        filename: 'bundle.js',
        clean: true
    },
    devServer: {
        static: {
            directory: './dist',
            publicPath: '/assets/'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};