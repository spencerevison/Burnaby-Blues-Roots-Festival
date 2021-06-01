module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'semi': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-alert': 0,
    'max-len': 0,
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
    'spaced-comment': 0,
    'react/no-danger': 0,
    'no-multiple-empty-lines': 0,
  },
};
