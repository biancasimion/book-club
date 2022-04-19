const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const stylesHandler = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    optimization: {
        minimize: !isDev,
    },
    output: {
        filename: 'app.js',
        clean: true,
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: isDev ? 'inline-source-map' : 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
        historyApiFallback: {
            historyApiFallback: { index: '/' },
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [stylesHandler, 'css-loader'],
            },
            {
                test: /\.html$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'file-loader',
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css',
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
};
