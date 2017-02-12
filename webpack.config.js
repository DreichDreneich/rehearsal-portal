var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/main.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/index.html' },
            { from: './node_modules/bootstrap/dist/css/bootstrap.min.css', to: __dirname + "/dist/libs"},
            { from: './src/static', to: __dirname + "/dist/static"}
        ]),
        new ExtractTextPlugin('styles.css'),
        new webpack.ProvidePlugin({
            $: "jquery/dist/jquery.min.js",
            jQuery: "jquery/dist/jquery.min.js",
            "window.jQuery": "jquery/dist/jquery.min.js"
        })
    ],
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        root: path.resolve('./src'),
        extensions: ["", ".scss", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", "less"],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },

    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.tsx?$/, loader: "awesome-typescript-loader" 
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract(
                    "style-loader", "css-loader!less-loader?sourceMap"
                )
            },
            {
                //Это полная жесть, убрал отсюда postcss-loader и все заработало
                //Итого для react toolbox нужно node-sass и sass-loader
                test: /(\.scss|\.css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass')
            }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
};
