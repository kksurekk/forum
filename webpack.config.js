const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        port: 8080,
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },
    module: {
        rules: [{
                test: '/\.js$/',
                loader: 'babel-loader',
                //打包除这个文件之外的文件
                exclude: path.resolve(__dirname, "node_modules"),
                //打包包括的文件
                include: path.resolve(__dirname, "src")
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 319200,
                        name: 'img/[name]-[hash].[ext]',
                        publicPath: '../dist/'
                    }
                }]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + "/src/index.html"
        }),
        new webpack.BannerPlugin("版权所有，翻版必究"),
        new VueLoaderPlugin()
    ]
}