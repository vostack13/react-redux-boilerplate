const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const {hostName, port} = require('./local.default');

module.exports = {
    context: path.resolve(__dirname, '../app'),

    devServer: {
        contentBase       : path.join(__dirname, '..','dist'),
        disableHostCheck  : true,
        historyApiFallback: true,
        host              : hostName,
        port              : port,
    },

    devtool: isProduction ? false : 'cheap-module-eval-source-map',
    entry  : './index.tsx',
    mode   : isProduction ? 'production' : 'development',

    module: {
        rules: [
            {
                test   : /\.ts(x?)$/,
                use    : 'ts-loader',
                exclude: /node_modules/,
            },

            {
                exclude: /node_modules/,
                loader : 'babel-loader',
                query  : require('./babel'),
                test   : /\.js$/,
            },

            {
                test: /\.svg$/,
                use : ['@svgr/webpack', 'url-loader'],
            },

            {
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
                ],

                test: /\.(jpe?g|png|gif|woff|woff2)$/i,
            },
        ],
    },

    optimization: {
        minimizer: [
            new TerserPlugin({
                cache    : true,
                parallel : true,
                sourceMap: true,
            }),
        ],
    },

    output: {
        filename  : isProduction ? '[name]-[chunkhash].bundle.js' : '[name].bundle.js',
        path      : path.join(__dirname, '..', 'dist'),
        pathinfo  : !isProduction,
        publicPath: '/',
    },

    performance: {hints: false},

    plugins: [
        new CopyPlugin([
            {from: 'assets', to: 'assets'},
        ]),

        new HtmlWebpackPlugin(
            isProduction
                ? {
                    favicon: '../app/assets/images/favicon.png',
                    inject : true,

                    minify: {
                        collapseWhitespace           : true,
                        keepClosingSlash             : true,
                        minifyCSS                    : true,
                        minifyJS                     : true,
                        minifyURLs                   : true,
                        removeComments               : true,
                        removeEmptyAttributes        : true,
                        removeRedundantAttributes    : true,
                        removeStyleLinkTypeAttributes: true,
                        useShortDoctype              : true,
                    },

                    template: '../public/index.html',
                }

                : {
                    favicon : '../app/assets/images/favicon.png',
                    template: '../public/index.html',
                },
        ),
    ],

    resolve: {
        alias: {
            'app': path.join(__dirname, '../app'),
        },

        extensions: ['.tsx', '.ts', '.json', '.js'],

        modules: [
            path.resolve(__dirname, '..', 'app'),
            path.resolve(__dirname, '..', 'node_modules'),
        ],
    },


};
