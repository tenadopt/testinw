const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[contenthash].js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public", "index.html"),
                favicon: path.resolve(__dirname, "public", "favicon.ico")
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-leader", "css-loader"]
            }
        ]

    },
    devServer: {
        port: 3000,
        open: true
    }
}