module.exports = {
  extends: ['standard-base', 'prettier'],
  plugins: ['import', 'prettier'],
  env: {
    browser: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
};
