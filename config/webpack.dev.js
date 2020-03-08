const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = function () {
    return webpackMerge(commonConfig, {
        mode: 'development',
        devtool: 'source-map',

        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, '../dist'),
            publicPath: '/',
        },

        module: {
            rules: [
                /**
                 * Rule to support SASS pre-processor.
                 *
                 * Add ability to import CSS from JS code.
                 * CSS will be injected automatically to DOM using <style> tag.
                 *
                 * See: https://webpack.js.org/loaders/css-loader/
                 *      https://webpack.js.org/loaders/style-loader/
                 *      https://webpack.js.org/loaders/sass-loader/
                 */
                {
                    test: /\.(scss|css)$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[local]__[hash:base64:5]',
                                },
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: true },
                        },
                    ],
                },
            ],
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    DEVELOPMENT: process.env.DEVELOPMENT,
                },
            }),
        ],

        /**
         * Webpack Development Server configuration
         * Description: The webpack-dev-server is a little node.js Express server.
         * The server emits information about the compilation state to the client,
         * which reacts to those events.
         *
         * See: https://webpack.js.org/configuration/dev-server/#root
         */
        devServer: {
            port: 3000,
            contentBase: path.resolve('./dist'),
            hot: true,
            historyApiFallback: true,
            inline: true,
        },
    });
};
