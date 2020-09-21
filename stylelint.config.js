module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  plugins: ['stylelint-order', 'stylelint-value-no-unknown-custom-properties'],
  rules: {
    'csstools/value-no-unknown-custom-properties': [
      true,
      {
        importFrom: [
          'src/tokens/color.css',
          'src/tokens/space.css',
          'src/tokens/typography.css',
          'src/styles/theme.css',
        ],
      },
    ],
  },
};
