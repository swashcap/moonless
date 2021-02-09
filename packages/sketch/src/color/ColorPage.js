import sketchConstructor from 'sketch-constructor';

import { Swatch } from './Swatch.js';

const { Artboard, Page } = sketchConstructor;

export const ColorPage = class ColorPage extends Page {
  constructor({ colors }) {
    super({
      name: 'Colors',
    });

    const artboard = new Artboard({
      frame: {
        height: 1000,
        width: 1000,
        x: 0,
        y: 0,
      },
      layers: Object.keys(colors).reduce(
        (memo, color, i) =>
          memo.concat(
            Object.keys(colors[color]).map(
              (name, j) =>
                new Swatch({
                  color: colors[color][name],
                  frame: {
                    height: 100,
                    width: 100,
                    x: j * 100,
                    y: i * 100,
                  },
                  name: `${color} ${name}`,
                })
            )
          ),
        []
      ),
      name: 'Colors',
    });

    this.layers = [artboard];
  }
};
