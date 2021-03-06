module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'no-extra-parens': ['error', 'all'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-unused-vars': ['warn'],
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
