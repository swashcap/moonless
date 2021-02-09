import { promises as fs } from 'fs';
import path from 'path';
import sketchConstructor from 'sketch-constructor';

import color from './color/index.js';
import text from './text/index.js';
import { getDirname, readJSON } from './util.js';

/**
 * Generate a color Sketch file from tokens.
 *
 * @see {@link https://github.com/amzn/sketch-constructor/tree/master/__examples__/generating-sketch-from-style-dictionary/sketch}
 */
(async () => {
  try {
    const sketch = new sketchConstructor.Sketch();
    const dirname = getDirname(import.meta.url);

    const [pkg] = await Promise.all([
      readJSON(path.join(dirname, '../package.json')),
      fs.mkdir(path.join(dirname, '../dist/'), { recursive: true }),
      color(sketch),
      text(sketch),
    ]);

    await sketch.build(
      path.resolve(dirname, `../dist/moonless-${pkg.version}.sketch`)
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
