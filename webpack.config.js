const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const ReactRootPlugin = require('html-webpack-react-root-plugin');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

const common = {
    entry: PATHS.source + '/index.js',
    output: {
        path: PATHS.build,
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|svg|gif)$/,
                loader: 'file-loader?name=images/[name].[ext]'
            }, {
                test: /\.js$/,
                loaders: ['react-hot-loader', 'babel-loader'],
                include: path.join(__dirname, 'source')
            }, {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                }),
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: 'node_modules/normalize.css/normalize.css', to: 'css/'},
            { from: 'node_modules/reset.css/reset.css', to: 'css/'},
            { from: 'node_modules/font-awesome/css', to: 'css/'},
            { from: 'node_modules/font-awesome/fonts', to: 'fonts/'}
        ]),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['css/normalize.css', 'css/reset.css', 'css/font-awesome.min.css'],
            append: true
        }),
        new ReactRootPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('./css/[name].css')
    ],
    devtool: 'source-map',
    resolve: {
        modules: ['node_modules', 'source'],
    },
};

const developmentConfig = {
    devServer: {
        stats: 'errors-only',
        inline: true,
        port: 9000,
        hot: true,
        contentBase: './build',
        historyApiFallback: true
    }
};

module.exports = function(env) {
    if (env === 'production'){
        return merge([
            common
        ])
    };
    if (env === 'development'){
        return merge([
            common,
            developmentConfig
        ])
    }
};
