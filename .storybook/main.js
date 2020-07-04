/* eslint-env node */
const path = require('path');

module.exports = {
  addons: ['@storybook/preset-typescript', '@storybook/addon-docs'],
  stories: ['../src/**/*.stories.tsx'],
  /**
   * Customize Webpack config.
   * {@link https://storybook.js.org/docs/configurations/custom-webpack-config/}
   */
  webpackFinal: (config) => {
    const index = config.module.rules.findIndex(({ test }) =>
      test.test('.css')
    );
    config.module.rules.splice(index, 1);

    config.module.rules.push(
      {
        exclude: [/node_modules/, /\.module\.css$/],
        include: path.resolve(__dirname, '../'),
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        include: path.resolve(__dirname, '../src/'),
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      }
    );

    return config;
  },
};
