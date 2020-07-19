/* eslint-env node */
module.exports = {
  env: {
    test: {
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    },
  },
  extends: ['plugin:jsx-a11y/recommended'],
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-react',
    ['@babel/preset-typescript', { allExtensions: true, isTSX: true }],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-transform-runtime',
    'jsx-a11y',
  ],
};
