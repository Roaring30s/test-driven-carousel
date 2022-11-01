module.exports = {
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    plugins: ['react', 'jest'],
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