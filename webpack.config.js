const CopyPlugin = require("copy-webpack-plugin");
const path = require("node:path");

const MODE = process.env.NODE_ENV || 'development';
const PROD = MODE === 'production';
const DEV = MODE === 'development';

const copyRules = [
    {
        from: __dirname + "/src/index.html",
        to: __dirname + "/dist/index.html",
    },
    {
        from: __dirname + "/src/assets",
        to: __dirname + "/dist",
    }
];

module.exports = {
    mode: MODE,
    devtool: DEV ? "inline-source-map" : "source-map",
    context: __dirname + "/src",
    entry: "./index.tsx",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.ts[x]?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "ts-loader",
                    options: {
                        configFile: "tsconfig.json",
                    }
                }],
            },
            {
                test: /\.css/,
                use: [ "style-loader", { loader: "css-loader", options: { url: false } }],
            },
        ],
    },
    
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".wasm"],
    },
    devServer: {
        historyApiFallback: true,
        open: true,
        port: 8080,
    },
    plugins: [
        new CopyPlugin({patterns: copyRules}),
        new WasmPackPlugin({
            crateDirectory: path.join(__dirname, "wasm/pkg")
        }),
    ],
};