const globals = require('globals');

module.exports = [
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
      'no-duplicate-case': 'error',
      'no-empty': ['warn', { allowEmptyCatch: true }],
      'no-extra-semi': 'warn',
      'no-irregular-whitespace': 'error',
      'no-unreachable': 'error',
      'no-unsafe-negation': 'error',
      'no-cond-assign': ['error', 'always'],
      'no-constant-condition': 'warn',
    },
  },
];
