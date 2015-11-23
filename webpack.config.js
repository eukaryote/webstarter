var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    subDir = 'build';

module.exports = {
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, subDir),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.js$/,
                loader: 'jsx-loader'
            }
        ]
    },
    plugins: [
        /* create one css file per initial chunk and embed stylesheets into
           additional chunks (recommended because it's optimal with respect
            to initial page loading time): */
        new ExtractTextPlugin('[name].css')
        /* Create one css file per initial chunk, which also contains styles
           from additional chunks (in small apps with multiple entry points,
           this mode might be better because of HTTP request overheads and
           caching) */
        // new ExtractTextPlugin('[name].css', {allChunks: true})
        , new HtmlWebpackPlugin({
            title: 'My Web App',
            template: 'index.html',
            inject: 'body'
        })
    ],
    recordsPath: path.resolve(path.join(__dirname, subDir), 'webpack.records.js')
};
