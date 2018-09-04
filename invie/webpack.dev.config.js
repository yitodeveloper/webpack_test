const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        invie: path.resolve(__dirname,'src/index.js')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        port: 80
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    // options: {
                    //     presets: ['react','es2015', 'stage-2']
                    // }
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: "url-loader",
                    options:{
                        limit: 1000000,
                        fallback: 'file-loader',
                        name: 'images/[name].[hash].[ext]'
                    }
                }
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}