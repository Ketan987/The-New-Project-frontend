const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const uglifyJs = require('uglify-js');
const { argv } = require('process');

function optimization(mode) {
    if (mode === 'production') {
        return {
            minimize: true,
            minimizer: [new TerserPlugin()],
        }
    }
    return {
        minimizer: [
            new TerserPlugin({
                minify: (file, sourceMap) => {
                    const uglifyJsOption = {};

                    if(sourceMap) {
                        uglifyJsOption.sourceMap = {
                            content: sourceMap
                        };
                    }
                    return uglifyJs.minify(file, uglifyJsOption);
                }
            })
        ]
    }
}

module.exports = {
    entry: "./src/index",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js",
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        headers: {
            'x-powered-By': 'NProjectTeam'
        }
    },
    module:{
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/i,
                use: ["Style-loader", "css-loader"]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    optimization: optimization(argv.mode),
}