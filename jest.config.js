module.exports = {
  /**
   * Mock `.css` imports.
   * {@link https://jestjs.io/docs/en/webpack.html#mocking-css-modules}
   */
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    'moonless-utils': '<rootDir>/packages/utils/dist/index.esm.js',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
};
