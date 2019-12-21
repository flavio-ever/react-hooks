module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
    // Apontar todas as regras que não encontrar como um erro
    'prettier/prettier': 'error',
    // JSX
    'react/jsx-filename-extension': [
      // Warn somente se extencoes não forem jsx quanto js
      'warn',
      { extensions : ['.jsx', '.js'] }
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'no-console': ['error', { allow: ['tron']}],
    'no-param-reassign': 'off'
  },
};
