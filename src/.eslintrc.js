module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'no-console': 'off',
  },
  settings: {
    react: {
      version: '16.13.0',
    },
  },
};
