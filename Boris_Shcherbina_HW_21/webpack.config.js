const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react"],
                    }
                }
            },
            {
                test: /\.(sass|css)$/,
                use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader', 'sass-loader'],
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './build/main.css'
        })
    ],
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'index.build.js',
    },
    resolve: {
        extensions: [".js", ".jsx"],
    }
};