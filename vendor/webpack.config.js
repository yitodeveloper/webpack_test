const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const config = {
    mode: 'development',
    entry: {
        vendor: ['react','react-dom'],
        home: path.resolve(__dirname,'./src/js/index.js'),
        contact: path.resolve(__dirname,'./src/js/contact.js')
    },
    output :{
        path:  path.resolve(__dirname,"dist"),
        filename: "[name].js",
        publicPath: "./dist/"
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: [
                      {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                      },
                      'postcss-loader'
                ]
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
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader',{
                        loader: 'less-loader',
                        options: {
                            noIeCompat: true
                        }
                    }]
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
        new ExtractTextPlugin("css/[name].css"),
        /* new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
        }) */
    ],
    optimization: {
        splitChunks: {
           cacheGroups:{
               vendor:{
                   chunks: 'initial',
                   name: 'vendor',
                   test: 'vendor',
                   enforce: true
               }
           }
        }
    }
}

module.exports = config