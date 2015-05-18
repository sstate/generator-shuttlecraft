var path = require('path');
var webpack = require('webpack');

var plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
];
var entry = ['./examples/app'];
var loaders = [];

if(process.env.NODE_ENV === 'PRODUCTION'){
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    );
    loaders.push(
        {test: /\.js?$/, exclude: /node_modules/, loaders: ['babel']}
    );
}else {
    plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    );
    entry.push(
        'webpack-dev-server/client?http://localhost:8180',
        'webpack/hot/only-dev-server'
    );
    loaders.push(
        {test: /\.js?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel']}
    );
}

module.exports = {

    entry: entry,

    output: {
        path: path.join(__dirname, 'dist'),
        filename: '_bundle.js',
        publicPath: 'http://localhost:8180/dist'
    },

    module: {
        loaders: loaders
    },

    node: {
        Buffer: false
    },

    plugins: plugins

};
