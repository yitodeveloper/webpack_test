const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
    mode: 'development',
    entry: {
        home: path.resolve(__dirname,'./src/js/home.js'),
        contacto: path.resolve(__dirname,'./src/js/contacto.js'),
        proyectos: path.resolve(__dirname,'./src/js/proyectos.js')
    },
    output :{
        path:  path.resolve(__dirname,"dist"),
        filename: "js/[name].js"
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: 'css-loader'
              })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css")
    ]
}

module.exports = config