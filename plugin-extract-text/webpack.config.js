const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: {
       "home" :path.resolve(__dirname, 'index.js'),
       "precios" :path.resolve(__dirname, 'precios.js'),
       "contacto" :path.resolve(__dirname, 'contacto.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //Aquí van los loaders
            {
                //que tipo de archivo quiero reconocer
                test: /\.css$/,
                //que loader se va a encargar del archivo
                use: ExtractTextPlugin.extract({
                    //['style-loader', 'css-loader']
                    fallback: 'style-loader',
                    use:"css-loader"
                })
            }
        ]
},
    plugins: [
        //aquí van los plugins
        new ExtractTextPlugin("css/[name].css")
    ]
}