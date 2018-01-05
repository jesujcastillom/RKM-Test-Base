import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ExtractTextWebpackPlugin from "extract-text-webpack-plugin";

export default {
    entry: ["bootstrap-loader/extractStyles", "./src/app.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "scripts/[name].[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.less$/,
                loader: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "less-loader"
                    ]
                })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: "file-loader"
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            attrs: ["img:src", "img:ng-src"]
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|ttf|eot|otf)$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jQuery"
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: "body"
        }),
        new ExtractTextWebpackPlugin({
            filename: 'styles/[name].[hash].css',
            allChunks: true
        })
    ]
}