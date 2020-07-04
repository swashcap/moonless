/* eslint-env node */
module.exports = {
  /**
   * Mock `.css` imports.
   * {@link https://jestjs.io/docs/en/webpack.html#mocking-css-modules}
   */
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
};
