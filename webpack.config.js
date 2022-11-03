const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        //webpack to build bundle for this specific file
        carousel: './src/Carousel.js',
        example: './example/index.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Carousel Example',
            chunks: ['example'],
        }),
    ],
    module: {
        //Rule: use babel-loader for all js files
        rules: [
            {
                test:/\.js$/,
                loader: require.resolve('babel-loader'),
            }
        ]
    }
};