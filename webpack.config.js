const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",

    devServer: {
        port: 4200,
    },

    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "/dist"),
        filename: "[name].bundle.js",
        assetModuleFilename: "assets/[name][ext]",
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "template.html",
        }),
        new CleanWebpackPlugin(),
    ],

    module: {
        rules: [
            //js
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: ["babel-loader"],
            // },
            {
                test: /.html$/i,
                loader: "html-loader",
            },

            // изображения
            {
                test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
                type: "asset/resource",
            },
            // шрифты
            {
                test: /\.(woff(2)?|eot|ttf|otf|)$/,
                type: "asset/inline",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },

            // {
            //     test: /\.svg$/,
            //     loader: "svg-inline-loader?classPrefix",
            // },
        ],
    },
};