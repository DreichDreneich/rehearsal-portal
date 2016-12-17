var webpack = require('webpack');
var webpackConfig = require('./webpack.config')
var webpackDevServer = require("webpack-dev-server");

var compiler = webpack(webpackConfig);
var server = new webpackDevServer(compiler, {
    contentBase: "./dist",
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000
    },
    noInfo: false,
});

server.listen(8080, "localhost", function() {
});