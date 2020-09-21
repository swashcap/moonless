const atImport = require('postcss-import');
const cssnano = require('cssnano');
const customProperties = require('postcss-custom-properties');
const purge = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    atImport(),
    customProperties({
      importFrom: [
        'src/tokens/color.css',
        'src/tokens/space.css',
        'src/tokens/typography.css',
        'src/styles/theme.css',
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
