const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function () {
    return webpackMerge(commonConfig, {
        mode: 'production',

        module: {
            rules: [
                /**
                 * Extract and compile SCSS files to external CSS file
                 *
                 * See: https://webpack.js.org/loaders/sass-loader/#in-production
                 */
                {
                    test: /\.(scss|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },

        plugins: [
            /**
             * Plugin: ExtractTextPlugin
             * Description: Extracts imported CSS files into external stylesheet
             *
             * See: https://webpack.js.org/plugins/extract-text-webpack-plugin/
             */
            new MiniCssExtractPlugin({ filename: '[name].css' }),
        ]
    });
};
