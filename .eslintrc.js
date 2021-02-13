module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        amd: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended'
    ],
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true, singleQuote: true }],
        'react/react-in-jsx-scope': 'off',
        'no-undef': 2,
        'no-unused-vars': 0,
        'react/prop-types': 0
    }
};
