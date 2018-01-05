import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: {
        app: "./src/app.js"
    },
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
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
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
                use: "file-laoder"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: "body"
        })
    ]
}