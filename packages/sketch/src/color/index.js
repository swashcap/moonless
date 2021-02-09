import path from 'path';

import { ColorPage } from './ColorPage.js';
import { getDirname, readJSON, toSentenceCase } from '../util.js';

export default async function color(sketch) {
  const variables = await readJSON(
    path.join(
      getDirname(import.meta.url),
      '../../../tokens/dist/js/variables.json'
    )
  );

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

  // Add background color layer styles
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
}
