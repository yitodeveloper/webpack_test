const webpack = require('webpack')

module.exports = {
    entry: {
        app: './index.js'
    },
    output: {
        filename: '[name].bundle.js',
        publicPath: 'dist/'
    },
    devServer: {
        port: 80,
        hot: true
    },
    module: {
        rules:[
            {
                test : /\.css$/,
                loader: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}