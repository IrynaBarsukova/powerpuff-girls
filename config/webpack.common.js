const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: ['@babel/polyfill', './src/index.js'],
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
    },

    module: {
        rules: [
            /**
             * Babel loader in order to support ES6 features.
             * A Babel 'ENV' preset can automatically determine the Babel plugins and polyfills you need
             * based on your supported environments.
             *
             * See: https://webpack.js.org/loaders/babel-loader/
             *      https://github.com/babel/babel-preset-env
             */
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                },
            },

            /**
             * File loader for supporting images, fonts, for example, in CSS files.
             *
             * See: https://webpack.js.org/loaders/file-loader/
             */
            {
                test: /\.(woff|woff2|eot|ttf|otf|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                    },
                },
            },
        ],
    },

    plugins: [
        /**
         * Plugin: HtmlWebpackPlugin
         * Description: Simplifies creation of HTML files to serve your webpack bundles.
         * This is especially useful for webpack bundles that include a hash in the filename
         * which changes every compilation.
         *
         * See: https://github.com/ampedandwired/html-webpack-plugin
         */
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve('./src/index.html'),
            chunks: ['app'],
        }),

        /**
         * Plugin: CleanWebpackPlugin
         * Description: remove/clean your build folder(s).
         *
         * See: https://github.com/johnagan/clean-webpack-plugin
         */
        new CleanWebpackPlugin(),
    ],
};
