module.exports = {
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parser: 'babel-eslint',
    parserOptions: {
        "ecmaVersion": 6
    },
    env: {
        node: true,
    },
    rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        'comma-dangle': ['error', 'always-multiline'],
        'no-unused-vars': ['error', { varsIgnorePattern: '^_'}],
    }
};