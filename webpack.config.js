/*
* @Author: Aaayang
* @Date:   2017-09-03 21:45:53
* @Last Modified by:   Aaayang
* @Last Modified time: 2017-09-03 22:37:08
*/
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/main.js",// 唯一入口
    output: {
        path: __dirname + "/public",// 打包文件存放位置
        filename: "bundle.js"// 打包后输出文件的文件名
    },
    devtool: 'eval-source-map',// 只用开发阶段使用的，便于调试
    devServer: {
        contentBase: "./public",// 本地服务器所加载的页面所在目录
        historyApiFallback: true,// 不跳转
        inline: true,// 实时刷新
        hot: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                            modules: true// css只对当前模块生效
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('my name is Aaayang~~'),// 版权声明的插件
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin()// 热加载插件
    ]
};