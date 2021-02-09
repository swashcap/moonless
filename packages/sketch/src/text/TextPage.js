import sketchConstructor from 'sketch-constructor';

const { Artboard, Page, Text, TextStyle } = sketchConstructor;

export class TextPage extends Page {
  constructor({ text, textStyles }) {
    super({
      name: 'Text',
    });

    const artboard = new Artboard({
      frame: {
        height: 1000,
        width: 1000,
        x: 0,
        y: 0,
      },
      layers: Object.keys(text)
        .map((name, index) => {
          const value = text[name];
          const style = textStyles.find((textStyle) => textStyle.name === name);

          if (!style) return;

          const layer = new Text({
            frame: {
              height: 100,
              width: 1000,
              x: 0,
              y: index * 100,
            },
            name,
            string: name,
            // style: {
            //   fontSize: value.fontSize,
            //   fontWeight: value.fontWeight,
            //   lineHeight: value.lineHeight,
            // },
            textStyle: new TextStyle({
              fontSize: value.fontSize,
              fontWeight: value.fontWeight,
              lineHeight: value.lineHeight,
            }),
          });

          layer.setSharedStyle(style);

          return layer;
        })
        .filter(Boolean),
      name: 'Text',
    });

    this.layers = [artboard];
  }
}
