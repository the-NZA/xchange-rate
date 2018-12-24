let path = require('path');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        open: 'Google Chrome',
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules'
            }
        ]
    }
};

module.exports = (env, opt) => {
    let production = opt.mode === 'production';

    conf.devtool = production ? false : 'eval-sourcemap';
    return conf;
};