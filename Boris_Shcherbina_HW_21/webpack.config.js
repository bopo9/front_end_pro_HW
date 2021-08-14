const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const optimization = () => {
    const configObj = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProd) {
        configObj.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin()
        ];
    }

    return configObj;
};

const plugins = () => {
    return [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`
        }),
    ];
};

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    stats: {
        children: true
    },
    output: {
        clean: true,
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'app'),
        publicPath: ''
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'app'),
        open: true,
        compress: true,
        liveReload: true,
        hot: true,
        port: 9000,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    optimization: optimization(),
    plugins: plugins(),
    devtool: isProd ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]?[hash:8]'
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: isDev,
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            },
                            optipng: {
                                enabled: false,
                                quality: 70
                            },
                            pngquant: {
                                quality: [0.60, 0.70],
                                speed: 5
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    },

                ],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev
                        },
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: (resourcePath, context) => {
                                return path.relative(path.dirname(resourcePath), context) + '/';
                            },
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-react"],
                    }
                }
            },
            {
                test: /\.(?:|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: `./fonts/${filename('[ext]')}`
                    }
                }],
            }
        ]
    }
};