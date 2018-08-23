const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    mode: 'development',
    entry: path.resolve(__dirname,'./src/js/index.js'),
    output :{
        path:  path.resolve(__dirname,"dist"),
        filename: "bundle.js",
        publicPath: "./dist/"
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: 'css-loader'
              })
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: "url-loader",
                    options:{
                        limit: 1000000
                    }
                }
            },
            {
                test: /\.(webm|mp4)$/,
                use: {
                    loader: "url-loader",
                    options:{
                        limit: 1000000,
                        name: 'videos/[name].[hash].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css")
    ]
}

module.exports = config