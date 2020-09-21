const csso = require('postcss-csso');
const purge = require('@fullhuman/postcss-purgecss');
const atImport = require('postcss-import');

module.exports = {
  plugins: [
    atImport(),
    purge({
      safelist: [/^(?!storybook).*/],
    }),
    csso,
  ],
};
