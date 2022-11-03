// .babelrc.js
//Babel does all the JSX converting heavy-lifting
module.exports = {
    presets: ['@babel/preset-react', '@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties'],
};