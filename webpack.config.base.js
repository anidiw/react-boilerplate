const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: `./src/index.html`
        })
    ],

    resolve: {
        extensions: ['.js', '.jsx']
    },
    module:{

        rules:[{
                test: /\.(js|jsx)$/,
                loader:`babel-loader`,
                exclude: /node_modules/,
        }]
    }

};