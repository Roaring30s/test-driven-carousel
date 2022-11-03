module.exports = {
    env: {
        browser: true,
        node: true
    },
    parser: 'babel-eslint',
    plugins: ['react', 'jest', '@babel/plugin-proposal-class-properties'],
    extends: ['eslint:recommended', 'plugin:react/recommended','plugin:jest/recommended'],
    settings: {
        react: {
            version: '16.4.2'
        }
    },
    rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
    }
};