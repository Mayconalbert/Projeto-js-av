const modoDev = process.env.NODE_ENV !== 'production'  
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: path.resolve(__dirname + '/public')
    }, 

     devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        port: 9000
    },
   
    optimization: {
        minimize: !modoDev,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
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
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    //'style-loader', 
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}