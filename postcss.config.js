const atImport = require('postcss-import');
const cssnano = require('cssnano');
const customProperties = require('postcss-custom-properties');
const purge = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    atImport(),
    customProperties({
      importFrom: [
        'packages/components/src/tokens/color.css',
        'packages/components/src/tokens/space.css',
        'packages/components/src/tokens/typography.css',
        'packages/components/src/styles/theme.css',
      ],
      preserve: false,
    }),
    purge({
      safelist: [/^(?!storybook).*/],
    }),
    cssnano({
      preset: [
        'advanced',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
