const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: path.resolve(__dirname + '/public')
    }, 
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'estilo.css'
            })
        ],
        module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    //'style-loader', 
                    'css-loader'
                ]
            }
        ]
    }
}