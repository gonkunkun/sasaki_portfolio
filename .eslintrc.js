module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/vue',
        'eslint:recommended',
        'plugin:eslint-comments/recommended'
    ],
    plugins: ['eslint-comments', 'prettier'],
    // add your custom rules here
    rules: {}
}
