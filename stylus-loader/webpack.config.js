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
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader','sass-loader']
                })
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        {
                            loader: 'stylus-loader',
                            options: {
                                use:[
                                    require('nib'),
                                    require('rupture')
                                ],
                                import:[
                                    '~nib/lib/nib/index.styl',
                                    '~rupture/rupture/index.styl'
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['react','es2015']
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