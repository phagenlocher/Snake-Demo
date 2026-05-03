const globals = require('globals');
const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'eqeqeq': ['error', 'always', { null: 'ignore' }],
      'no-var': 'warn',
      'prefer-const': 'warn',
      'no-extra-semi': 'warn',
      'no-irregular-whitespace': 'error',
      'no-unreachable': 'error',
      'no-unsafe-negation': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-constant-condition': 'warn',
      'curly': ['error', 'all'],
      'dot-notation': 'error',
      'no-throw-literal': 'error',
      'radix': 'error',
      'no-eval': 'error',
      'prefer-template': 'warn',
      'prefer-arrow-callback': 'warn',
      'prefer-spread': 'warn',
      'array-callback-return': 'warn',
      'no-array-constructor': 'warn',
    },
  },
];
