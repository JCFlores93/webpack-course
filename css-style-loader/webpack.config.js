const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            //Aquí van los loaders
            {   
                //que tipo de archivo quiero reconocer
                test:/\.css$/,
                //que loader se va a encargar del archivo
                use: ['style-loader','css-loader']
            }
        ]
    }
}