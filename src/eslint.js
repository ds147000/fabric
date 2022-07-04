const tsConfig = require('./TSEslint');
const prettier = require('./prettier');


// apply eslint-config-react-app env
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production';
}

module.exports = {
  extends: [
    'react-app',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  plugins: ['prettier'],
  rules: {
    'no-void': 0,
    'no-empty': [2, { allowEmptyCatch: true }],
    'prefer-promise-reject-errors': [2, { allowEmptyReject: true }],
    'no-else-return': [2, { allowElseIf: false }],
    'import/no-anonymous-default-export': 0,
    "prettier/prettier": [
      "error",
      prettier,
      {
        "fileInfoOptions": {
          "withNodeModules": true
        }
      }
    ],
    ...tsConfig,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
