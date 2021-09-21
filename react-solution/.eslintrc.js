module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/require-default-props': [0, { forbidDefaultForRequired: false, ignoreFunctionalComponents: false }],
    'no-eval': [0, { allowIndirect: false }],
    'react/prop-types': 0,
    'no-unused-vars': 0,
  },
};
