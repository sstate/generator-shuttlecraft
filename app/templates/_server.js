var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    headers: { 'Access-Control-Allow-Origin': '*' },
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    info: true, //  --no-info option
    hot: true,
    inline: true,
    colors: true
}).listen(8180, 'localhost', function(err, result){
        if(err){
            console.log(err);
        }
        console.log('Listening at localhost:8180');
    });
