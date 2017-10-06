var path = require('path');
var webpack = require('webpack');
var SRC = path.join(__dirname, 'src/');
var NODE_MODULES = path.join(__dirname, 'node_modules/');
console.log(__dirname)
module.exports = [{
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public/build'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.js']
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                include: path.join(__dirname, '/node_modules'),
                use: 'babel-loader',
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },

    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
}];
