module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  plugins: ['stylelint-order', 'stylelint-value-no-unknown-custom-properties'],
  rules: {
    'csstools/value-no-unknown-custom-properties': [
      true,
      {
        importFrom: [
          'packages/components/src/tokens/color.css',
          'packages/components/src/tokens/space.css',
          'packages/components/src/tokens/typography.css',
          'packages/components/src/styles/theme.css',
        ],
      },
    ],
  },
};
