/**
 * Created by linww on 2016/10/20.
 */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// 定义输出文件夹
var outputDir = './build';
// 定义开发文件夹
var entryPath = './src';

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isDev = ENV === 'build'
var isTest = ENV === 'watch';
var isProd = ENV === 'dist';

module.exports = function makeWebpackConfig(){

    /**
     * Config
     * 相关文档：http://webpack.github.io/docs/configuration.html
     * 这个是设置所有配置的对象
     */
    var config ={};


    /**
     * 入口
     * Reference: http://webpack.github.io/docs/configuration.html#entry
     * @type {{app: string}}
     */
    config.entry = {
        app:entryPath+'/modules/app.js',
        vendor: ["angular", "jquery"]
    }

    config.output ={
        path:outputDir,
        // Filename for entry points
        // Only adds hash in build mode
        filename: isProd ? '[name].[hash].js' : '[name].js',
    }

    // Initialize module
    config.module = {
        preLoaders: [],
        loaders:[
            { test:/\.css$/,loader:'style!css'},
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url?limit=1024&name=img/[name].[ext]'
            },
            {
                test: /\.(woff2?|otf|eot|svg|ttf)$/i,
                loader: 'url?name=fonts/[name].[ext]'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    }

    config.plugins = [];

    config.plugins.push(
        new HtmlWebpackPlugin({
            title:'index',
            template: entryPath+'/index.html',
            inject: 'body'
        })
    )
    config.plugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js"
        })
    )

    /**
     * Dev server configuration
     * Reference: http://webpack.github.io/docs/configuration.html#devserver
     * Reference: http://webpack.github.io/docs/webpack-dev-server.html
     */
    config.devServer = {
        contentBase: outputDir,
        stats: 'minimal'
    };

    return config;

}();