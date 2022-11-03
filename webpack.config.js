module.exports = {
    mode: 'development',
    entry: {
        //webpack to build bundle for this specific file
        carousel: './src/Carousel.js',
    },
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