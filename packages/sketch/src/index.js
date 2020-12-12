import { promises as fs } from 'fs';
import path from 'path';
import sketchConstructor from 'sketch-constructor';
import { fileURLToPath } from 'url';

import { ColorPage } from './ColorPage.js';

const { Sketch } = sketchConstructor;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const toSentenceCase = (value) =>
  value.toLowerCase().replace(/\b(\w)/, (v) => v.toUpperCase());

const readJSON = async (filename) =>
  JSON.parse(await fs.readFile(path.join(__dirname, filename), 'utf-8'));

/**
 * Generate a color Sketch file from tokens.
 *
 * @see {@link https://github.com/amzn/sketch-constructor/tree/master/__examples__/generating-sketch-from-style-dictionary/sketch}
 */
(async () => {
  try {
    const [pkg, variables] = await Promise.all([
      readJSON('../package.json'),
      readJSON('../../tokens/dist/js/variables.json'),
    ]);

    const sketch = new Sketch();

    // Add background color layer styles
    const colors = Object.keys(variables.color.base).reduce((memo, key) => {
      const value = variables.color.base[key];

      if (typeof value === 'string') {
        return {
          ...memo,
          solid: {
            ...memo.solid,
            [key]: value,
          },
        };
      }

      return {
        ...memo,
        [key]: value,
      };
    }, {});

    Object.keys(colors).forEach((color) =>
      Object.keys(colors[color]).forEach((name) => {
        sketch.addLayerStyle({
          fills: [
            {
              color: colors[color][name],
            },
          ],
          name: `Colors / ${toSentenceCase(color)} / ${name}`,
        });
      })
    );

    sketch.addPage(new ColorPage({ colors }));

    await fs.mkdir(path.resolve(__dirname, '../dist/'), { recursive: true });

    await sketch.build(
      path.resolve(__dirname, `../dist/moonless-${pkg.version}.sketch`),
      0
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
