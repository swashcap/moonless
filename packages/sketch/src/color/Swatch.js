import sketchConstructor from 'sketch-constructor';
import tinycolor from 'tinycolor2';

const { Group, Rectangle, Text } = sketchConstructor;

export const Swatch = class Swatch extends Group {
  constructor(args) {
    super({
      frame: args.frame,
      name: args.name,
    });

    this.layers = [
      new Rectangle({
        height: args.frame.height,
        name: 'background',
        style: {
          fills: [{ color: args.color }],
        },
        width: args.frame.width,
        x: 0,
        y: 0,
      }),
      new Text({
        alignment: 'center',
        color: tinycolor(args.color).isDark() ? '#fff' : '#000',
        fontSize: 12,
        frame: {
          height: 20,
          width: 100,
          x: 0,
          y: 40,
        },
        name: 'label',
        string: args.name,
      }),
    ];
  }
};
