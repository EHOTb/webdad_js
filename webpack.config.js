const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    devServer: {
        static: {
            directory: path.join(__dirname, "./dist"),
        },
        compress: true,
        historyApiFallback: true,
        https: false,
        open: true,
        hot: true,
        port: 9002,
        proxy: {
            "/api": "http://localhost:9000",
        },
        devMiddleware: {
            writeToDisk: true,
        },
    },

    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js",
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "webpack second project",
            template: path.resolve(__dirname, "./src/template.html"),
            filename: "index.html",
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        rules: [
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource",
            },
            // шрифты и SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: "asset/inline",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};